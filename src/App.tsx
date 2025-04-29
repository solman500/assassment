// App.tsx
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import databaseTypes from "./constent/databaseTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  connectionStrign: string;
  query: string;
  mapping: string;
  odoourl: string;
  ddoodb: string;
  odoousername: string;
  odoopassword: string;
  xeroClientId: string;
  xeroScopes: string;
  xeroState: string;
  xeroEndPoint: string;
  xeroResponsPort: string;
  xeroRedirectUri: string;
  username: string;
  password: string;
}

export default function App() {
  const [selectedIntegration, setSelectedIntegration] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    connectionStrign: "",
    query: "",
    mapping: "",
    odoourl: "",
    ddoodb: "",
    odoousername: "",
    odoopassword: "",
    xeroClientId: "",
    xeroScopes: "",
    xeroState: "",
    xeroEndPoint: "",
    xeroResponsPort: "",
    xeroRedirectUri: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically make your API call
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      toast.success(
        "Configuration saved successfully! Thank you for using our service.",
        {
          duration: 4000,
          position: "top-right",
        }
      );

      // Reset form after successful submission
      setFormData({
        connectionStrign: "",
        query: "",
        mapping: "",
        odoourl: "",
        ddoodb: "",
        odoousername: "",
        odoopassword: "",
        xeroClientId: "",
        xeroScopes: "",
        xeroState: "",
        xeroEndPoint: "",
        xeroResponsPort: "",
        xeroRedirectUri: "",
        username: "",
        password: "",
      });
      setSelectedIntegration("");
    } catch (error) {
      toast.error("Failed to save configuration. Please try again.", {
        duration: 4000,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderFormFields = () => {
    switch (selectedIntegration) {
      case "DirectDatabase":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="connectionStrign">Connection String</Label>
              <Input
                id="connectionStrign"
                value={formData.connectionStrign}
                onChange={(e) =>
                  handleInputChange("connectionStrign", e.target.value)
                }
                placeholder="Enter connection string"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="query">Query</Label>
              <Input
                id="query"
                value={formData.query}
                onChange={(e) => handleInputChange("query", e.target.value)}
                placeholder="Enter SQL query"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mapping">Mapping</Label>
              <Input
                id="mapping"
                value={formData.mapping}
                onChange={(e) => handleInputChange("mapping", e.target.value)}
                placeholder="Enter data mapping"
              />
            </div>
          </div>
        );

      case "Odoo":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="odoourl">Odoo URL</Label>
              <Input
                id="odoourl"
                value={formData.odoourl}
                onChange={(e) => handleInputChange("odoourl", e.target.value)}
                placeholder="Enter Odoo URL"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ddoodb">Database</Label>
              <Input
                id="ddoodb"
                value={formData.ddoodb}
                onChange={(e) => handleInputChange("ddoodb", e.target.value)}
                placeholder="Enter database name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="odoousername">Username</Label>
              <Input
                id="odoousername"
                value={formData.odoousername}
                onChange={(e) =>
                  handleInputChange("odoousername", e.target.value)
                }
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="odoopassword">Password</Label>
              <Input
                id="odoopassword"
                type="password"
                value={formData.odoopassword}
                onChange={(e) =>
                  handleInputChange("odoopassword", e.target.value)
                }
                placeholder="Enter password"
              />
            </div>
          </div>
        );

      case "Xero":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="xeroClientId">Client ID</Label>
              <Input
                id="xeroClientId"
                value={formData.xeroClientId}
                onChange={(e) =>
                  handleInputChange("xeroClientId", e.target.value)
                }
                placeholder="Enter Xero Client ID"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xeroScopes">Scopes</Label>
              <Input
                id="xeroScopes"
                value={formData.xeroScopes}
                onChange={(e) =>
                  handleInputChange("xeroScopes", e.target.value)
                }
                placeholder="Enter Xero Scopes"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xeroState">State</Label>
              <Input
                id="xeroState"
                value={formData.xeroState}
                onChange={(e) => handleInputChange("xeroState", e.target.value)}
                placeholder="Enter Xero State"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xeroEndPoint">Endpoint</Label>
              <Input
                id="xeroEndPoint"
                value={formData.xeroEndPoint}
                onChange={(e) =>
                  handleInputChange("xeroEndPoint", e.target.value)
                }
                placeholder="Enter Xero Endpoint"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xeroResponsPort">Response Port</Label>
              <Input
                id="xeroResponsPort"
                value={formData.xeroResponsPort}
                onChange={(e) =>
                  handleInputChange("xeroResponsPort", e.target.value)
                }
                placeholder="Enter Response Port"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xeroRedirectUri">Redirect URI</Label>
              <Input
                id="xeroRedirectUri"
                value={formData.xeroRedirectUri}
                onChange={(e) =>
                  handleInputChange("xeroRedirectUri", e.target.value)
                }
                placeholder="Enter Redirect URI"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFC]">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-col lg:flex-row flex-1">
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-200 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#F9FAFC]">
          <Card className="p-4 md:p-6 space-y-4 md:space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-5">
                {databaseTypes.map((type) => (
                  <Button
                    key={type.id}
                    type="button" // Add this line
                    variant={"default"}
                    className="hover:bg-blue-500 hover:text-black cursor-pointer px-4 md:px-6 lg:px-10 w-full sm:w-auto"
                  >
                    {type.translationKey}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <Select
                  value={selectedIntegration}
                  onValueChange={setSelectedIntegration}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select Integration Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Integration Types</SelectLabel>
                      <SelectItem value="DirectDatabase">
                        Direct Database
                      </SelectItem>
                      <SelectItem value="Odoo">Odoo</SelectItem>
                      <SelectItem value="Xero">Xero</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {renderFormFields()}

              <Button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-600 text-white"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Configuration"}
              </Button>
            </form>
          </Card>
        </main>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
