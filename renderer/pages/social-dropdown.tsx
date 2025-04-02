

import { Plus, Trash2, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "../pages/ui/button"
import { Input } from "../pages/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../pages/ui/tabs"

interface SocialItem {
  name: string
  icon: string
  url?: string
}

export function SocialDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("apps")

  const [apps, setApps] = useState<SocialItem[]>([{ name: "Slack", icon: "/sl.png" }])

  const [websites, setWebsites] = useState<SocialItem[]>([
    { name: "Instagram.com", icon: "/in.png" },
    { name: "whatsapp.com", icon: "/wh.png" },
  ])

  const [customApp, setCustomApp] = useState("")
  const [customWebsite, setCustomWebsite] = useState("")

  const handleRemoveApp = (index: number) => {
    setApps(apps.filter((_, i) => i !== index))
  }

  const handleRemoveWebsite = (index: number) => {
    setWebsites(websites.filter((_, i) => i !== index))
  }

  const handleAddApp = (app: SocialItem) => {
    setApps([...apps, app])
  }

  const handleAddWebsite = (website: SocialItem) => {
    setWebsites([...websites, website])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Social</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="apps" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger
                value="apps"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Apps
              </TabsTrigger>
              <TabsTrigger
                value="websites"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Websites
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="apps" className="p-4">
            {/* Current Apps */}
            {apps.length > 0 && (
              <div className="mb-6">
                {apps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-800 rounded-md flex items-center justify-center overflow-hidden">
                        <Image src={app.icon || "/placeholder.svg"} alt={app.name} width={32} height={32} />
                      </div>
                      <span>{app.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveApp(index)}>
                      <Trash2 className="h-5 w-5 text-gray-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Apps */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Add Apps</h3>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-800 rounded-md flex items-center justify-center overflow-hidden">
                    <Image src="/sl.png" alt="Slack" width={32} height={32} />
                  </div>
                  <span>Slack</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleAddApp({ name: "Slack", icon: "/sl.png" })}
                >
                  <Plus className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* Custom App */}
            <div>
              <Input
                placeholder="Enter Custom App"
                value={customApp}
                onChange={(e) => setCustomApp(e.target.value)}
                className="border rounded-md p-2 w-full"
              />
            </div>
          </TabsContent>

          <TabsContent value="websites" className="p-4">
            {/* Current Websites */}
            {websites.length > 0 && (
              <div className="mb-6">
                {websites.map((website, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      {website.name.includes("instagram") ? (
                        <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-md flex items-center justify-center overflow-hidden">
                          <Image src={website.icon || "/placeholder.svg"} alt={website.name} width={32} height={32} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center overflow-hidden">
                          <Image src={website.icon || "/placeholder.svg"} alt={website.name} width={32} height={32} />
                        </div>
                      )}
                      <span>{website.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveWebsite(index)}>
                      <Trash2 className="h-5 w-5 text-gray-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Websites */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Add Websites</h3>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-800 rounded-md flex items-center justify-center overflow-hidden">
                    <Image src="/sl.png" alt="Slack.com" width={32} height={32} />
                  </div>
                  <span>Slack.com</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleAddWebsite({ name: "Slack.com", icon: "/sl.png" })}
                >
                  <Plus className="h-5 w-5 text-gray-500" />
                </Button>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center overflow-hidden">
                    <Image src="/in.png" alt="LinkedIn.com" width={32} height={32} />
                  </div>
                  <span>linkedin.com</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleAddWebsite({ name: "linkedin.com", icon: "/in.png" })
                  }
                >
                  <Plus className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* Custom Website */}
            <div>
              <Input
                placeholder="Enter Custom Website"
                value={customWebsite}
                onChange={(e) => setCustomWebsite(e.target.value)}
                className="border rounded-md p-2 w-full"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 flex gap-4">
          <Button className="flex-1 bg-sky-400 hover:bg-sky-500 text-white">Save</Button>
          <Button variant="destructive" className="flex-1 bg-pink-600 hover:bg-pink-700">
            Remove Category
          </Button>
        </div>
      </div>
    </div>
  )
}

