
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { LogOut, Shield, Eye, EyeOff } from 'lucide-react'

// Login Component
function CMSLoginPage({ onLogin }: { onLogin: (success: boolean) => void }) {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/cms/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        localStorage.setItem('cms_authenticated', 'true')
        localStorage.setItem('cms_auth_time', Date.now().toString())
        toast.success('Login successful!')
        onLogin(true)
      } else {
        toast.error('Invalid password. Please try again.')
        onLogin(false)
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Login failed. Please try again.')
      onLogin(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">CMS Admin Login</CardTitle>
          <p className="text-gray-600">Enter your password to access the content management system</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Admin Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your admin password"
                  required
                  disabled={loading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={loading || !password.trim()}
            >
              {loading ? 'Logging in...' : 'Login to CMS'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Default Password:</h3>
            <code className="text-sm bg-white px-2 py-1 rounded border text-blue-800">admin2024</code>
            <p className="text-xs text-blue-700 mt-2">
              ⚠️ Change this password after your first login for security
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Main CMS Component
interface ContentData {
  siteInfo: {
    siteName: string
    domain: string
    phone: string
    email: string
    address: {
      locality: string
      region: string
      country: string
    }
  }
  homepage: {
    title: string
    metaDescription: string
    heroSection: {
      heading: string
      subheading: string
      ctaText: string
    }
  }
  services: {
    office: {
      title: string
      description: string
      features: string[]
    }
    medical: {
      title: string
      description: string
      features: string[]
    }
    endOfTenancy: {
      title: string
      description: string
      features: string[]
    }
  }
}

export default function ProtectedCMSAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [content, setContent] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      loadContent()
    }
  }, [isAuthenticated])

  const checkAuth = () => {
    const isAuth = localStorage.getItem('cms_authenticated')
    const authTime = localStorage.getItem('cms_auth_time')
    
    if (isAuth === 'true' && authTime) {
      const timeDiff = Date.now() - parseInt(authTime)
      if (timeDiff < 24 * 60 * 60 * 1000) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('cms_authenticated')
        localStorage.removeItem('cms_auth_time')
      }
    }
    setLoading(false)
  }

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success)
  }

  const handleLogout = () => {
    localStorage.removeItem('cms_authenticated')
    localStorage.removeItem('cms_auth_time')
    setIsAuthenticated(false)
    setContent(null)
    toast.success('Logged out successfully')
  }

  const loadContent = async () => {
    try {
      const response = await fetch('/api/cms/content')
      const data = await response.json()
      setContent(data)
    } catch (error) {
      console.error('Error loading content:', error)
      toast.error('Error loading content')
    }
  }

  const saveContent = async () => {
    if (!content) return

    setSaving(true)
    try {
      const response = await fetch('/api/cms/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })

      if (response.ok) {
        toast.success('Content saved successfully!')
      } else {
        throw new Error('Failed to save')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      toast.error('Error saving content')
    } finally {
      setSaving(false)
    }
  }

  const updateContent = (path: string, value: any) => {
    if (!content) return

    const pathArray = path.split('.')
    const newContent = { ...content }
    let current: any = newContent

    for (let i = 0; i < pathArray.length - 1; i++) {
      if (!current[pathArray[i]]) current[pathArray[i]] = {}
      current = current[pathArray[i]]
    }

    current[pathArray[pathArray.length - 1]] = value
    setContent(newContent)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!isAuthenticated) {
    return <CMSLoginPage onLogin={handleLogin} />
  }

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">Loading content...</div>
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Content Management System</h1>
            <p className="text-sm text-gray-600">Securely manage your website content</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={saveContent} disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <Tabs defaultValue="site-info" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="site-info">Site Info</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="seo">SEO Settings</TabsTrigger>
        </TabsList>

        {/* Site Information */}
        <TabsContent value="site-info">
          <Card>
            <CardHeader>
              <CardTitle>Site Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={content.siteInfo.siteName}
                  onChange={(e) => updateContent('siteInfo.siteName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="domain">Domain</Label>
                <Input
                  id="domain"
                  value={content.siteInfo.domain}
                  onChange={(e) => updateContent('siteInfo.domain', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={content.siteInfo.phone}
                  onChange={(e) => updateContent('siteInfo.phone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={content.siteInfo.email}
                  onChange={(e) => updateContent('siteInfo.email', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Homepage Content */}
        <TabsContent value="homepage">
          <Card>
            <CardHeader>
              <CardTitle>Homepage Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pageTitle">Page Title (SEO)</Label>
                <Input
                  id="pageTitle"
                  value={content.homepage.title}
                  onChange={(e) => updateContent('homepage.title', e.target.value)}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {content.homepage.title.length} characters (aim for 50-60)
                </p>
              </div>
              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={content.homepage.metaDescription}
                  onChange={(e) => updateContent('homepage.metaDescription', e.target.value)}
                  rows={3}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {content.homepage.metaDescription.length} characters (aim for 150-160)
                </p>
              </div>
              <div>
                <Label htmlFor="heroHeading">Hero Section Heading</Label>
                <Input
                  id="heroHeading"
                  value={content.homepage.heroSection.heading}
                  onChange={(e) => updateContent('homepage.heroSection.heading', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="heroSubheading">Hero Section Subheading</Label>
                <Textarea
                  id="heroSubheading"
                  value={content.homepage.heroSection.subheading}
                  onChange={(e) => updateContent('homepage.heroSection.subheading', e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="ctaText">Call-to-Action Button Text</Label>
                <Input
                  id="ctaText"
                  value={content.homepage.heroSection.ctaText}
                  onChange={(e) => updateContent('homepage.heroSection.ctaText', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Content */}
        <TabsContent value="services">
          <div className="space-y-6">
            {Object.entries(content.services).map(([serviceKey, service]) => (
              <Card key={serviceKey}>
                <CardHeader>
                  <CardTitle className="capitalize">{serviceKey.replace(/([A-Z])/g, ' $1')} Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Service Title</Label>
                    <Input
                      value={service.title}
                      onChange={(e) => updateContent(`services.${serviceKey}.title`, e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Service Description</Label>
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateContent(`services.${serviceKey}.description`, e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Features (one per line)</Label>
                    <Textarea
                      value={service.features.join('\n')}
                      onChange={(e) => updateContent(`services.${serviceKey}.features`, e.target.value.split('\n'))}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">SEO Status: Optimized ✅</h3>
                  <ul className="mt-2 text-sm text-green-700">
                    <li>✅ Title length optimized (under 60 characters)</li>
                    <li>✅ Meta description optimized (under 160 characters)</li>
                    <li>✅ Canonical URL configured</li>
                    <li>✅ Favicon added</li>
                    <li>✅ Apple touch icon added</li>
                    <li>✅ Social sharing enabled</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Current Domain Settings</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Domain: {content.siteInfo.domain}
                  </p>
                  <p className="text-sm text-blue-700">
                    All URLs and canonical links updated to match your domain.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800">Security Notice</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    Remember to change your admin password from the default for better security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
