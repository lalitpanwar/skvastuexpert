"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Clock, User, Phone, Home, ArrowLeft, CheckCircle2, 
  MapPin, Sparkles, ClipboardCheck, ChevronRight, CalendarDays,
  Sunrise, Sun, Sunset
} from "lucide-react"

const timeCategories = [
  { label: "Morning", icon: <Sunrise className="w-4 h-4 text-orange-500" />, slots: ["06:00 AM", "08:00 AM", "10:00 AM"] },
  { label: "Afternoon", icon: <Sun className="w-4 h-4 text-amber-500" />, slots: ["12:00 PM", "02:00 PM", "04:00 PM"] },
  { label: "Evening", icon: <Sunset className="w-4 h-4 text-purple-500" />, slots: ["06:00 PM", "08:00 PM"] }
]

export default function Booking() {
  const [mounted, setMounted] = React.useState(false)
  const [step, setStep] = React.useState(1)
  const [date, setDate] = React.useState(null)
  const [selectedTime, setSelectedTime] = React.useState("")
  const [service, setService] = React.useState("")
  const [userData, setUserData] = React.useState({ name: "", phone: "", city: "", address: "" })

  // Hydration fix
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-slate-50/50" />

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768

  const handleNext = () => {
    if (step === 1 && isDesktop) setStep(3)
    else setStep(step + 1)
  }

  const handleBack = () => {
    if (step === 3 && isDesktop) setStep(1)
    else setStep(step - 1)
  }

  const handleToReview = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setUserData(Object.fromEntries(formData))
    setStep(4)
  }

  const sendToWhatsApp = () => {
    const msg = `*Nayi Puja Booking*%0a*Puja:* ${service}%0a*Tithi:* ${date?.toLocaleDateString('en-IN')}%0a*Samay:* ${selectedTime}%0a*Yajman:* ${userData.name}%0a*Phone:* ${userData.phone}%0a*Pata:* ${userData.address}`
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank")
  }

  const TimeSlotsGrid = () => (
    <div className="space-y-6">
      {timeCategories.map((cat) => (
        <div key={cat.label} className="space-y-3">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">{cat.icon} {cat.label}</p>
          <div className="grid grid-cols-2 gap-2">
            {cat.slots.map((s) => (
              <Button key={s} variant="outline" size="sm" 
                className={`h-10 rounded-xl  transition-all ${selectedTime === s ? 'bg-[#1a237e] text-white border-[#1a237e]' : 'bg-white hover:border-orange-500'}`}
                onClick={() => setSelectedTime(s)}>{s}</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="pt-24 md:pt-32 max-w-5xl mx-auto p-4 min-h-screen">
      <div className="flex flex-col md:flex-row items-stretch bg-white rounded-[32px] shadow-2xl overflow-hidden border border-zinc-100">
        
        {/* SIDEBAR TABS */}
        <div className="bg-zinc-50 md:w-48 border-b md:border-b-0 md:border-r border-zinc-100 p-6 flex flex-row md:flex-col justify-between md:justify-start gap-8">
          {[
            { id: 1, label: 'Schedule', icon: <CalendarDays className="w-4 h-4" /> },
            { id: 2, label: 'Time', icon: <Clock className="w-4 h-4" />, hideDesktop: true },
            { id: 3, label: 'Details', icon: <User className="w-4 h-4" /> },
            { id: 4, label: 'Review', icon: <ClipboardCheck className="w-4 h-4" /> }
          ].filter(s => !(s.hideDesktop && isDesktop)).map((s) => (
            <div key={s.id} className={`flex items-center gap-3 transition-all ${step === s.id ? 'opacity-100' : 'opacity-30'}`}>
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center  ${step === s.id ? 'bg-[#1a237e] text-white shadow-lg' : 'bg-white text-zinc-400 border border-zinc-200'}`}>
                {s.icon}
              </div>
              <div className="hidden md:block text-xs  text-zinc-700">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-[550px]">
          
          {/* HEADER */}
          <div className="p-6 border-b border-zinc-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {step > 1 && (
                <Button variant="ghost" size="icon" onClick={handleBack} className="rounded-full">
                  <ArrowLeft className="w-5 h-5 text-zinc-600" />
                </Button>
              )}
              <h2 className="text-xl font-sans  text-[#1a237e]">
                {step === 1 ? "Muhurat Chunein" : step === 2 ? "Samay Chunein" : step === 3 ? "Aapka Vivaran" : "Review Summary"}
              </h2>
            </div>
          </div>

          {/* BODY */}
          <div className="flex-1 p-6 md:p-10">
            {step === 1 && (
              <div className="flex flex-col md:flex-row gap-10 items-start animate-in fade-in">
                <div className="flex-1 w-full flex justify-center md:justify-start">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-2xl border border-zinc-100 p-4 shadow-sm" disabled={(d) => d < new Date().setHours(0,0,0,0)} />
                </div>
                {isDesktop && <div className="w-72 border-l border-zinc-50 pl-10"><TimeSlotsGrid /></div>}
              </div>
            )}

            {step === 2 && !isDesktop && <div className="animate-in slide-in-from-right-4"><TimeSlotsGrid /></div>}

            {step === 3 && (
              <div className="animate-in slide-in-from-right-4 space-y-8 max-w-xl">
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-500 p-2 rounded-lg text-white"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] text-emerald-700 font-black uppercase">Chuna Gaya Muhurat</p>
                      <p className="text-sm  text-emerald-900">
                        {date ? date.toLocaleDateString('hi-IN', {day:'numeric', month:'long'}) : 'N/A'}, {selectedTime || 'N/A'}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs  text-emerald-700 underline">Change</button>
                </div>

                <form id="details-form" onSubmit={handleToReview} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="md:col-span-2 space-y-2">
                     <Label className="text-xs  text-zinc-500">Puja Type</Label>
                     <Select onValueChange={setService} defaultValue={service} required>
                       <SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Chunein..." /></SelectTrigger>
                       <SelectContent>
                         <SelectItem value="Griha Pravesh">Griha Pravesh</SelectItem>
                         <SelectItem value="Satyanarayan Katha">Satyanarayan Katha</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                   <Input name="name" placeholder="Yajman Name" defaultValue={userData.name} required className="h-12 rounded-xl" />
                   <Input name="phone" placeholder="Mobile Number" defaultValue={userData.phone} required className="h-12 rounded-xl" />
                   <Textarea name="address" placeholder="Pura Pata" defaultValue={userData.address} required className="md:col-span-2 rounded-xl min-h-[100px]" />
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in zoom-in-95 max-w-md mx-auto bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 shadow-inner">
                <div className="bg-[#1a237e] p-6 text-white text-center">
                  <ClipboardCheck className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="font-sans  text-xl uppercase tracking-widest">Receipt</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between border-b pb-2 text-sm"><span className="text-zinc-500">Service:</span><span className="">{service}</span></div>
                  <div className="flex justify-between border-b pb-2 text-sm"><span className="text-zinc-500">Date/Time:</span><span className="">{date?.toDateString()}, {selectedTime}</span></div>
                  <div className="pt-2"><p className="text-[10px] text-zinc-400 font-black uppercase">Yajman Info</p><p className="">{userData.name} | {userData.phone}</p><p className="text-xs text-zinc-500">{userData.address}</p></div>
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="p-6 border-t border-zinc-50 bg-white flex justify-end gap-4">
            {step < 4 ? (
              <Button onClick={step === 3 ? () => document.getElementById('details-form').requestSubmit() : handleNext} 
                className="bg-[#1a237e] hover:bg-black text-white px-10 rounded-2xl  h-14 shadow-lg shadow-indigo-100">
                {step === 3 ? "Review Summary" : "Next Step"} <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={sendToWhatsApp} className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-12 rounded-2xl  h-14 shadow-xl">
                CONFIRM ON WHATSAPP
              </Button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}