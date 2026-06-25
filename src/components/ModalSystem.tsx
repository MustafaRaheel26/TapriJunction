import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Coffee, Heart, Plus, Minus, Ticket, CheckCircle2, ChevronRight, Calendar, User, Mail, Phone, Users, ShieldAlert, ChevronDown } from 'lucide-react';

interface ModalSystemProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story';
}

interface MenuItem {
  name: string;
  desc: string;
  priceTHB: number;
  priceINR: number;
  badge?: string;
}

const DINE_IN_MENU: { category: string; items: MenuItem[] }[] = [
  {
    category: "Cutting Chai & Warm Sips",
    items: [
      { name: "Tapri Cutting Chai", desc: "The heart of Tapri Junction. Strongly brewed CTC tea with hand-crushed ginger, cardamom, and a splash of milk, served in a classic ribbed cutting glass.", priceTHB: 50, priceINR: 120, badge: "Must Try" },
      { name: "Masala Railway Chai", desc: "Our signature blend featuring clove, cinnamon, black pepper, and nutmeg. Rich and highly aromatic.", priceTHB: 60, priceINR: 140 },
      { name: "Saffron Kesari Chai", desc: "Rich royal milk tea infused with premium Kashmiri saffron strands, almond slivers, and cardamom.", priceTHB: 80, priceINR: 180, badge: "Premium" },
      { name: "Green Elachi Lemongrass Tea", desc: "A dairy-free, soothing infusion of crushed green cardamom and fresh organic Thai lemongrass.", priceTHB: 55, priceINR: 130 }
    ]
  },
  {
    category: "Platform Bites & Buns",
    items: [
      { name: "Bun Maska", desc: "Freshly baked soft cardamomy sweet bun sliced and generously loaded with salted Amul butter. Perfect for dipping into cutting chai.", priceTHB: 60, priceINR: 140 },
      { name: "Bun Jam Maska", desc: "Soft bun slathered with sweet mixed-fruit jam on one side and a thick layer of salted butter on the other.", priceTHB: 70, priceINR: 160 },
      { name: "Vada Pav (The Mumbai Express)", desc: "A spiced batter-fried golden potato dumpling nestled inside a soft bread bun with spicy garlic powder and tangy coriander chutneys.", priceTHB: 85, priceINR: 195, badge: "Bestseller" },
      { name: "Amritsari Samosa Junction (2 Pcs)", desc: "Flaky golden triangular pastry stuffed with spiced green peas and mashed potatoes. Served with tamarind and mint chutneys.", priceTHB: 90, priceINR: 210 }
    ]
  },
  {
    category: "Stationmaster's Special Mains",
    items: [
      { name: "Railway Vegetable Cutlet (2 Pcs)", desc: "Crumb-fried heart-shaped beetroot and mixed vegetable patties, spiced with garam masala. Just like the ones served in vintage sleeper cars.", priceTHB: 110, priceINR: 250 },
      { name: "Keema Pav (Veg-Special)", desc: "Minced soya protein and sweet green peas simmered in a robust, slow-cooked masala gravy, served with two butter-toasted warm pav rolls.", priceTHB: 160, priceINR: 360, badge: "Chef's Signature" },
      { name: "Chola Bhatura Platform", desc: "Puffy, golden deep-fried sourdough leavened bread served with rich, tangy, dark-spiced chickpeas, pickled onions, and green chilies.", priceTHB: 180, priceINR: 410 }
    ]
  }
];

const SWEETS_LIST = [
  { id: 'laddoo', name: "Motichoor Laddoo", desc: "Golden gram flour pearls fried in pure ghee, sweetened with cardamomy syrup.", priceTHB: 40, emoji: "🟠", image: "data:image/jpeg;base64,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" },
  { id: 'kaju', name: "Royal Kaju Katli", desc: "Velvety cashew fudge, smooth and melt-in-the-mouth, finished with silver leaf.", priceTHB: 45, emoji: "💎", image: "data:image/jpeg;base64,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" },
  { id: 'gulab', name: "Gulab Jamun", desc: "Soft milk-solid dumplings, fried deep golden and steeped in warm saffron sugar syrup.", priceTHB: 35, emoji: "🟤", image: "data:image/jpeg;base64,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" },
  { id: 'barfi', name: "Kesar Pista Barfi", desc: "Dense, decadent fudge made with ground pistachios, milk-solids, and fine saffron.", priceTHB: 45, emoji: "🟩", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDhZOGaiBnbrKvu4sNch1jAHqqGrrg5EpBQF5fY2tXw&s=10" },
  { id: 'jalebi', name: "Crispy Saffron Jalebi", desc: "Thin spiral fritters soaked in hot sugar syrup, flavored with rosewater.", priceTHB: 35, emoji: "🌀", image: "https://www.chilitochoc.com/wp-content/uploads/2025/03/instant-jalebi-recipe.jpg" }
];

export default function ModalSystem({ isOpen, onClose, type }: ModalSystemProps) {
  // Sweets Box Builder State
  const [boxSize, setBoxSize] = useState<'4' | '8' | '12'>('8');
  const [selectedSweets, setSelectedSweets] = useState<{ [key: string]: number }>({});
  const [sweetsStep, setSweetsStep] = useState<'build' | 'success'>('build');
  const [sweetsInquiryData, setSweetsInquiryData] = useState({ name: '', phone: '', address: '' });

  // Catering State
  const [cateringStep, setCateringStep] = useState<'form' | 'ticket'>('form');
  const [cateringData, setCateringData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Chai Party / Social',
    guests: '25-50 guests',
    date: '',
    message: ''
  });

  // Lunch Club State
  const [lunchStep, setLunchStep] = useState<'select' | 'success'>('select');
  const [lunchPlan, setLunchPlan] = useState<'weekly' | 'monthly'>('weekly');
  const [lunchTier, setLunchTier] = useState<'veg' | 'premium'>('veg');
  const [addChai, setAddChai] = useState(true);
  const [lunchData, setLunchData] = useState({ name: '', email: '', phone: '', address: '' });

  // Helper to calculate sweet total count
  const currentSweetsCount: number = Object.keys(selectedSweets).reduce((acc: number, key: string) => acc + (selectedSweets[key] || 0), 0);
  const targetSweetsCount: number = parseInt(boxSize);

  const handleAddSweet = (id: string) => {
    if (currentSweetsCount < targetSweetsCount) {
      setSelectedSweets(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }
  };

  const handleRemoveSweet = (id: string) => {
    if (selectedSweets[id] && selectedSweets[id] > 0) {
      setSelectedSweets(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const resetSweets = () => {
    setSelectedSweets({});
    setSweetsStep('build');
  };

  // Pricing calculation
  const getLunchPrice = () => {
    let base = lunchPlan === 'weekly' ? 600 : 2200;
    if (lunchTier === 'premium') {
      base += lunchPlan === 'weekly' ? 150 : 500;
    }
    if (addChai) {
      base += lunchPlan === 'weekly' ? 75 : 250;
    }
    return base;
  };

  const generateTicketNumber = () => {
    return "TJ-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleCateringSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCateringStep('ticket');
  };

  const handleSweetsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSweetsCount === targetSweetsCount) {
      setSweetsStep('success');
    }
  };

  const handleLunchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLunchStep('success');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1A0A00]/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#FAF6EE] rounded-xl border border-[#C9922B]/30 shadow-2xl z-10 grain-overlay"
        >
          {/* Header Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#6B1A1A]/10 text-[#6B1A1A] hover:bg-[#6B1A1A]/20 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* DINE-IN MENU MODAL */}
          {type === 'menu' && (
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <span className="text-[#C9922B] font-mono tracking-widest text-xs uppercase block mb-1">Authentic Station Fare</span>
                <h2 className="font-display font-black text-3xl md:text-4xl text-[#6B1A1A]">DINE-IN MENU</h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="h-[1px] w-12 bg-[#C9922B]"></span>
                  <span className="text-xs text-[#5C3D2E] font-accent italic">From Platform to Plate</span>
                  <span className="h-[1px] w-12 bg-[#C9922B]"></span>
                </div>
              </div>

              <div className="space-y-8">
                {DINE_IN_MENU.map((cat, i) => (
                  <div key={i} className="border-b border-[#EDE4D0] last:border-0 pb-6 last:pb-0">
                    <h3 className="font-display font-bold text-xl text-[#2C1810] mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C9922B]" />
                      {cat.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {cat.items.map((item, j) => (
                        <div key={j} className="group flex flex-col justify-between p-3 rounded-lg hover:bg-[#EDE4D0]/40 transition-colors duration-200">
                          <div>
                            <div className="flex items-baseline justify-between gap-2 mb-1">
                              <h4 className="font-sans font-bold text-base text-[#2C1810] flex items-center gap-1.5">
                                {item.name}
                                {item.badge && (
                                  <span className="text-[9px] bg-[#6B1A1A] text-white px-1.5 py-0.5 rounded font-mono uppercase tracking-wider scale-90">
                                    {item.badge}
                                  </span>
                                )}
                              </h4>
                              <div className="border-b border-dotted border-[#2C1810]/30 grow mx-2 hidden sm:block" />
                              <span className="font-mono text-sm font-bold text-[#6B1A1A] shrink-0">
                                {item.priceTHB} THB <span className="text-[#5C3D2E]/70 text-xs font-normal">(~₹{item.priceINR})</span>
                              </span>
                            </div>
                            <p className="text-xs text-[#5C3D2E] leading-relaxed pr-4">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#C9922B]/20 text-center">
                <p className="text-xs text-[#5C3D2E] font-accent italic mb-3">All ingredients are locally sourced or imported from authentic Indian spice farms.</p>
                <button
                  onClick={onClose}
                  className="bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-semibold text-xs uppercase tracking-wider py-3 px-8 rounded-full transition-all duration-300"
                >
                  Close Menu
                </button>
              </div>
            </div>
          )}

          {/* MEETHA JUNCTION - SWEETS BOX BUILDER */}
          {type === 'sweets' && (
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="text-[#C9922B] font-mono tracking-widest text-xs uppercase block mb-1">Traditional Mithai Craft</span>
                <h2 className="font-display font-black text-3xl text-[#6B1A1A]">MEETHA JUNCTION BOX BUILDER</h2>
                <p className="text-xs text-[#5C3D2E] max-w-md mx-auto mt-1">Assemble your premium box of pure ghee Indian sweets. Perfect for celebrations, gifting or sweet cravings.</p>
              </div>

              {sweetsStep === 'build' ? (
                <div>
                  {/* Step 1: Select Box Size */}
                  <div className="mb-6 bg-[#EDE4D0]/50 p-4 rounded-lg border border-[#EDE4D0]">
                    <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block mb-3 text-center">1. Choose Box Capacity</span>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { size: '4', name: "4-Piece Passenger Box", price: 150 },
                        { size: '8', name: "8-Piece Express Box", price: 280 },
                        { size: '12', name: "12-Piece Royal Trunk", price: 400 }
                      ].map(box => (
                        <button
                          key={box.size}
                          onClick={() => {
                            setBoxSize(box.size as '4' | '8' | '12');
                            setSelectedSweets({});
                          }}
                          className={`p-3 rounded-lg border text-center transition-all ${boxSize === box.size ? 'bg-[#6B1A1A] border-[#6B1A1A] text-white shadow-md' : 'bg-white border-[#C9922B]/20 text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          <span className="block font-bold text-lg">{box.size} Pieces</span>
                          <span className="text-[10px] block opacity-80 leading-tight mt-0.5">{box.name}</span>
                          <span className="block text-xs font-mono font-bold mt-1 text-[#C9922B]">{box.price} THB</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Visual Box Fill Meter */}
                  <div className="mb-6 bg-white p-4 rounded-lg border border-[#EDE4D0] shadow-xs">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-2">
                      <span>Box Filling Progress</span>
                      <span>{currentSweetsCount} / {targetSweetsCount} Filled</span>
                    </div>
                    <div className="h-3 w-full bg-[#FAF6EE] rounded-full overflow-hidden border border-[#EDE4D0]">
                      <div
                        className="h-full bg-[#C9922B] transition-all duration-300"
                        style={{ width: `${(currentSweetsCount / targetSweetsCount) * 100}%` }}
                      />
                    </div>

                    {/* Sweets Grid View */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center min-h-[44px]">
                      {currentSweetsCount === 0 ? (
                        <span className="text-xs text-gray-400 italic self-center">Your sweet box is currently empty. Add sweets below!</span>
                      ) : (
                        Object.keys(selectedSweets).map((id) => {
                          const count = selectedSweets[id] || 0;
                          const item = SWEETS_LIST.find(s => s.id === id);
                          return Array.from({ length: count }).map((_, idx) => (
                            <motion.span
                              key={`${id}-${idx}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="inline-flex items-center gap-1.5 bg-[#FAF6EE] border border-[#C9922B]/20 text-xs pl-1 pr-2.5 py-0.5 rounded-full text-[#2C1810] font-sans font-medium"
                            >
                              <img src={item?.image} className="w-4 h-4 rounded-full object-cover" alt="" referrerPolicy="no-referrer" />
                              <span className="truncate max-w-[80px]">{item?.name}</span>
                            </motion.span>
                          ));
                        })
                      )}
                    </div>
                  </div>

                  {/* Sweets Selection List */}
                  <div className="space-y-3 mb-6 max-h-[250px] overflow-y-auto pr-1">
                    {SWEETS_LIST.map((sweet) => {
                      const count = selectedSweets[sweet.id] || 0;
                      const isFull = currentSweetsCount >= targetSweetsCount;
                      return (
                        <div key={sweet.id} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-[#EDE4D0] hover:border-[#C9922B]/40 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#C9922B]/20 shrink-0">
                              <img src={sweet.image} className="w-full h-full object-cover" alt={sweet.name} referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <h4 className="font-sans font-bold text-sm text-[#2C1810]">{sweet.name}</h4>
                              <p className="text-[11px] text-[#5C3D2E]/80 leading-snug">{sweet.desc}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0 ml-4">
                            <button
                              onClick={() => handleRemoveSweet(sweet.id)}
                              disabled={count === 0}
                              className={`p-1 rounded-full ${count > 0 ? 'bg-[#6B1A1A]/10 text-[#6B1A1A] hover:bg-[#6B1A1A]/20' : 'text-gray-300 cursor-not-allowed'}`}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-mono font-bold text-sm text-[#2C1810] w-4 text-center">{count}</span>
                            <button
                              onClick={() => handleAddSweet(sweet.id)}
                              disabled={isFull}
                              className={`p-1 rounded-full ${!isFull ? 'bg-[#6B1A1A]/10 text-[#6B1A1A] hover:bg-[#6B1A1A]/20' : 'text-gray-300 cursor-not-allowed'}`}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleSweetsSubmit} className="space-y-3 bg-[#EDE4D0]/30 p-4 rounded-lg border border-[#EDE4D0]/50">
                    <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block text-center mb-2">2. Secure Your Tiffin Delivery In Bangkok</span>
                    <div className="grid md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={sweetsInquiryData.name}
                        onChange={e => setSweetsInquiryData(prev => ({ ...prev, name: e.target.value }))}
                        className="p-2 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#C9922B]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone Number"
                        value={sweetsInquiryData.phone}
                        onChange={e => setSweetsInquiryData(prev => ({ ...prev, phone: e.target.value }))}
                        className="p-2 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#C9922B]"
                      />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Delivery Address (Sukhumvit, Sathorn, etc.)"
                      value={sweetsInquiryData.address}
                      onChange={e => setSweetsInquiryData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full p-2 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#C9922B]"
                    />

                    <button
                      type="submit"
                      disabled={currentSweetsCount !== targetSweetsCount}
                      className={`w-full py-3 mt-2 rounded font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${currentSweetsCount === targetSweetsCount ? 'bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white cursor-pointer shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      {currentSweetsCount === targetSweetsCount ? "Confirm Sweet Box Inquiry" : `Fill Box (${currentSweetsCount}/${targetSweetsCount}) To Submit`}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#C9922B]/10 rounded-full flex items-center justify-center mx-auto text-[#C9922B]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#6B1A1A]">SWEET BOX RESERVED!</h3>
                  <div className="max-w-md mx-auto p-4 bg-white rounded border border-[#C9922B]/20 text-left font-mono text-xs text-[#2C1810] space-y-2">
                    <p className="font-sans font-bold text-center border-b border-dashed pb-2 text-[#6B1A1A]">TAPRI JUNCTION MITHAI RECEIPT</p>
                    <p><strong>Passenger:</strong> {sweetsInquiryData.name}</p>
                    <p><strong>Contact:</strong> {sweetsInquiryData.phone}</p>
                    <p><strong>Box Class:</strong> {boxSize} Piece Sweet Tiffin</p>
                    <div className="border-t border-dashed my-2 pt-2">
                      <p className="font-bold">Contents:</p>
                      {Object.entries(selectedSweets).map(([id, count]) => {
                        const s = SWEETS_LIST.find(x => x.id === id);
                        return <p key={id}>- {s?.emoji} {s?.name} x {count}</p>;
                      })}
                    </div>
                    <p className="border-t border-dashed pt-2"><strong>Destination:</strong> {sweetsInquiryData.address}</p>
                    <p className="font-sans font-bold text-center text-[#C9922B] pt-2">Our stationmaster will contact you on WhatsApp to confirm delivery.</p>
                  </div>
                  <button
                    onClick={resetSweets}
                    className="bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans text-xs uppercase tracking-wider py-2.5 px-6 rounded"
                  >
                    Build Another Box
                  </button>
                </div>
              )}
            </div>
          )}

          {/* CATERING & EVENTS FORM & GOLDEN TICKET */}
          {type === 'catering' && (
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="text-[#C9922B] font-mono tracking-widest text-xs uppercase block mb-1">Banquet Service</span>
                <h2 className="font-display font-black text-3xl text-[#6B1A1A]">CATERING & BANQUETS</h2>
                <p className="text-xs text-[#5C3D2E] max-w-md mx-auto mt-1">Host your corporate luncheon, wedding feast, or a nostalgic Chai Tapri pop-up anywhere in Thailand.</p>
              </div>

              {cateringStep === 'form' ? (
                <form onSubmit={handleCateringSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#C9922B]" /> Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={cateringData.name}
                        onChange={e => setCateringData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Agoda HR / Priya Sen"
                        className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#C9922B]" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={cateringData.email}
                        onChange={e => setCateringData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@company.com"
                        className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#C9922B]" /> Mobile / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={cateringData.phone}
                        onChange={e => setCateringData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+66 XX-XXX-XXXX"
                        className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#C9922B]" /> Estimated Guests
                      </label>
                      <div className="relative">
                        <select
                          value={cateringData.guests}
                          onChange={e => setCateringData(prev => ({ ...prev, guests: e.target.value }))}
                          className="w-full p-2.5 pr-8 text-xs bg-white border border-[#C9922B]/40 rounded focus:outline-none focus:border-[#6B1A1A] focus:ring-1 focus:ring-[#6B1A1A] appearance-none cursor-pointer font-semibold text-[#2C1810]"
                        >
                          <option>10-25 guests</option>
                          <option>25-50 guests</option>
                          <option>50-100 guests</option>
                          <option>100-200 guests</option>
                          <option>200+ guests</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#C9922B]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C9922B]" /> Event Date
                      </label>
                      <input
                        type="date"
                        required
                        value={cateringData.date}
                        onChange={e => setCateringData(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block">Select Catering Experience</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "Chai Party / Social",
                        "Corporate Lunch / Bento",
                        "Wedding / Sangeet Buffet",
                        "Live Station Pop-up"
                      ].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCateringData(prev => ({ ...prev, eventType: type }))}
                          className={`p-2 border rounded text-[11px] font-semibold text-center transition-all ${cateringData.eventType === type ? 'bg-[#C9922B] border-[#C9922B] text-white' : 'bg-white border-[#EDE4D0] text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block">Special Requests & Dietary Notes</label>
                    <textarea
                      rows={3}
                      value={cateringData.message}
                      onChange={e => setCateringData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="e.g. Jain food options, organic tea requested, retro chai cart decoration requested..."
                      className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all duration-300"
                  >
                    Generate Catering Ticket
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-6">
                  {/* Indian Railway Ticket Style */}
                  <div className="max-w-lg mx-auto bg-[#FFFCE8] border-2 border-[#C9922B] rounded-lg shadow-lg relative overflow-hidden stamp-border">
                    {/* Retro ticket watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 rotate-12">
                      <span className="font-display font-black text-6xl text-[#6B1A1A]">TAPRI JN.</span>
                    </div>

                    <div className="bg-[#6B1A1A] p-3 text-white flex justify-between items-center text-xs font-bold">
                      <span className="font-mono tracking-wider">INDIAN RAILWAYS CATERING BOARD</span>
                      <span className="bg-[#C9922B] text-[#2C1810] px-2 py-0.5 rounded text-[10px] uppercase font-mono">CONFIRMED</span>
                    </div>

                    <div className="p-4 space-y-4">
                      <div className="flex justify-between border-b border-dashed border-[#C9922B]/50 pb-3">
                        <div className="text-left">
                          <span className="text-[10px] text-[#5C3D2E] block">PNR NUMBER</span>
                          <span className="font-mono font-bold text-[#6B1A1A] text-lg">{generateTicketNumber()}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[#5C3D2E] block">SERVICE CLASS</span>
                          <span className="font-mono font-bold text-[#2C1810] text-sm uppercase">{cateringData.eventType}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-left text-xs border-b border-dashed border-[#C9922B]/50 pb-3">
                        <div>
                          <p><span className="text-[9px] text-[#5C3D2E]">PATRON / HOST</span></p>
                          <p className="font-bold text-sm text-[#2C1810]">{cateringData.name}</p>
                        </div>
                        <div>
                          <p><span className="text-[9px] text-[#5C3D2E]">BOARDING STATION</span></p>
                          <p className="font-bold text-sm text-[#2C1810]">Bangkok Junction</p>
                        </div>
                        <div>
                          <p><span className="text-[9px] text-[#5C3D2E]">DEPARTURE DATE</span></p>
                          <p className="font-bold text-sm text-[#2C1810]">{cateringData.date || "To be arranged"}</p>
                        </div>
                        <div>
                          <p><span className="text-[9px] text-[#5C3D2E]">PASSENGER COUNT</span></p>
                          <p className="font-bold text-sm text-[#2C1810]">{cateringData.guests}</p>
                        </div>
                      </div>

                      <div className="text-left text-xs text-[#5C3D2E] bg-white p-2.5 rounded border border-[#EDE4D0]">
                        <p className="font-bold text-[10px] uppercase tracking-wider mb-1 text-[#6B1A1A]">STATIONMASTER INSTRUCTIONS:</p>
                        <p className="italic font-sans">"{cateringData.message || "Standard royal tiffin menu requested. Prepared with fresh spices and traditional clay kulhads."}"</p>
                      </div>

                      <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-[#5C3D2E]/80">
                        <span>FARE: PRICELESS HOSPITALITY</span>
                        <span>OFFICE: SUKHUMVIT SOI 24</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C3D2E] max-w-sm mx-auto">This golden digital reservation ticket has been logged with our Stationmaster. We will contact you at <strong>{cateringData.phone}</strong> or <strong>{cateringData.email}</strong> within 12 hours with a bespoke menu proposal.</p>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setCateringStep('form')}
                      className="bg-white border border-[#6B1A1A] text-[#6B1A1A] hover:bg-[#6B1A1A]/5 font-sans font-semibold text-xs uppercase tracking-wider py-2.5 px-6 rounded transition-all"
                    >
                      Edit Details
                    </button>
                    <button
                      onClick={onClose}
                      className="bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-semibold text-xs uppercase tracking-wider py-2.5 px-6 rounded transition-all"
                    >
                      Finish Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* LUNCH CLUB PLANS & SUBSCRIPTION CONFIGURATOR */}
          {type === 'lunch' && (
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="text-[#C9922B] font-mono tracking-widest text-xs uppercase block mb-1">Weekly & Monthly Tiffins</span>
                <h2 className="font-display font-black text-3xl text-[#6B1A1A]">LUNCH CLUB CORNER</h2>
                <p className="text-xs text-[#5C3D2E] max-w-md mx-auto mt-1">Authentic home-cooked Indian tiffin meals delivered hot to your office or home in Bangkok. No hassle, pure comfort.</p>
              </div>

              {lunchStep === 'select' ? (
                <div className="space-y-6">
                  {/* Select Tiffin Level & Frequency */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Plan duration */}
                    <div className="p-4 bg-white rounded-lg border border-[#EDE4D0] space-y-3">
                      <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block">1. Subscription Route</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setLunchPlan('weekly')}
                          className={`p-2.5 border rounded text-xs font-semibold text-center transition-all ${lunchPlan === 'weekly' ? 'bg-[#6B1A1A] border-[#6B1A1A] text-white' : 'bg-white border-[#EDE4D0] text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          Weekly Commuter
                          <span className="block text-[10px] font-normal opacity-80 mt-0.5">5 Meals (Mon-Fri)</span>
                        </button>
                        <button
                          onClick={() => setLunchPlan('monthly')}
                          className={`p-2.5 border rounded text-xs font-semibold text-center transition-all ${lunchPlan === 'monthly' ? 'bg-[#6B1A1A] border-[#6B1A1A] text-white' : 'bg-white border-[#EDE4D0] text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          Monthly Stationmaster
                          <span className="block text-[10px] font-normal opacity-80 mt-0.5">20 Meals (Save 15%)</span>
                        </button>
                      </div>
                    </div>

                    {/* Tiffin tier */}
                    <div className="p-4 bg-white rounded-lg border border-[#EDE4D0] space-y-3">
                      <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block">2. Tiffin Menu Standard</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setLunchTier('veg')}
                          className={`p-2.5 border rounded text-xs font-semibold text-center transition-all ${lunchTier === 'veg' ? 'bg-[#C9922B] border-[#C9922B] text-white' : 'bg-white border-[#EDE4D0] text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          Choti Line (Standard)
                          <span className="block text-[9px] font-normal opacity-90 mt-0.5">1 Curry, Dal, Roti, Rice</span>
                        </button>
                        <button
                          onClick={() => setLunchTier('premium')}
                          className={`p-2.5 border rounded text-xs font-semibold text-center transition-all ${lunchTier === 'premium' ? 'bg-[#C9922B] border-[#C9922B] text-white' : 'bg-white border-[#EDE4D0] text-[#2C1810] hover:bg-[#EDE4D0]/30'}`}
                        >
                          Badi Line (Premium)
                          <span className="block text-[9px] font-normal opacity-90 mt-0.5">2 Curries, Rice, Roti, Sweet</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="p-4 bg-white rounded-lg border border-[#EDE4D0] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block">Platform Add-on: Daily Cutting Chai</span>
                      <p className="text-[11px] text-[#5C3D2E] mt-0.5">We will pack a sealed, piping hot bottle of ginger-cardamom cutting chai with every meal.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addChai}
                        onChange={() => setAddChai(!addChai)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B1A1A]"></div>
                    </label>
                  </div>

                  {/* Calculated Price */}
                  <div className="bg-[#EDE4D0] p-4 rounded-lg flex flex-col md:flex-row items-center justify-between border border-[#C9922B]/30 gap-3">
                    <div className="text-center md:text-left">
                      <span className="text-xs text-[#5C3D2E] block uppercase tracking-wider font-bold">Estimated Subscription Cost</span>
                      <span className="font-mono text-2xl font-black text-[#6B1A1A]">
                        {getLunchPrice()} THB <span className="text-sm font-normal text-[#2C1810]">/ {lunchPlan}</span>
                      </span>
                      <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">
                        (~₹{Math.round(getLunchPrice() * 2.3)} INR • Free Delivery in central Sukhumvit)
                      </span>
                    </div>
                    <div className="text-xs text-[#2C1810] space-y-1">
                      <p>✅ Pure Vegetarian (Sattvic & healthy)</p>
                      <p>✅ Reusable thermal tiffin bags</p>
                      <p>✅ Pause or reschedule anytime via WhatsApp</p>
                    </div>
                  </div>

                  {/* Checkout form */}
                  <form onSubmit={handleLunchSubmit} className="space-y-3 bg-[#FAF6EE] p-4 rounded-lg border border-[#EDE4D0]">
                    <span className="text-xs font-bold text-[#2C1810] uppercase tracking-wider block text-center mb-1">Enter Commuter Boarding Details</span>
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={lunchData.name}
                        onChange={e => setLunchData(prev => ({ ...prev, name: e.target.value }))}
                        className="p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={lunchData.email}
                        onChange={e => setLunchData(prev => ({ ...prev, email: e.target.value }))}
                        className="p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone Number"
                        value={lunchData.phone}
                        onChange={e => setLunchData(prev => ({ ...prev, phone: e.target.value }))}
                        className="p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                      />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Delivery Address / Corporate Office / Desk Number"
                      value={lunchData.address}
                      onChange={e => setLunchData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-white border border-[#EDE4D0] rounded focus:outline-none focus:border-[#6B1A1A]"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 mt-2 bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all duration-300"
                    >
                      Submit Subscription Boarding Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 bg-[#C9922B]/10 rounded-full flex items-center justify-center mx-auto text-[#C9922B]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#6B1A1A]">LUNCH CLUB BOARDED SUCCESSFULLY!</h3>
                  <p className="text-xs text-[#5C3D2E] max-w-md mx-auto">Welcome aboard the Lunch Club, <strong>{lunchData.name}</strong>! Your boarding passes and menu choices are secured.</p>

                  <div className="max-w-md mx-auto p-4 bg-[#FFFCE8] rounded-lg border border-[#C9922B] text-left font-mono text-xs text-[#2C1810] space-y-2 relative">
                    <p className="font-sans font-bold text-center border-b border-dashed pb-2 text-[#6B1A1A] uppercase">TAPRI JUNCTION LUNCH CLUB PASS</p>
                    <p><strong>Route Code:</strong> TJLC-{Math.floor(1000 + Math.random() * 9000)}</p>
                    <p><strong>Passenger:</strong> {lunchData.name}</p>
                    <p><strong>Tiffin Class:</strong> {lunchTier === 'veg' ? 'Choti Line (Standard)' : 'Badi Line (Premium)'}</p>
                    <p><strong>Duration:</strong> {lunchPlan === 'weekly' ? 'Weekly Route (5 meals)' : 'Monthly Route (20 meals)'}</p>
                    <p><strong>Daily Cutting Chai Add-on:</strong> {addChai ? "ENABLED (Hot Thermal Bottle)" : "DISABLED"}</p>
                    <p className="border-t border-dashed pt-2"><strong>Platform Destination:</strong> {lunchData.address}</p>
                    <p className="border-t border-dashed pt-2 font-sans font-bold text-center text-[#C9922B]">We will call you on WhatsApp at {lunchData.phone} to confirm start date & mock billing.</p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setLunchStep('select')}
                      className="bg-white border border-[#6B1A1A] text-[#6B1A1A] hover:bg-[#6B1A1A]/5 font-sans font-semibold text-xs uppercase tracking-wider py-2 px-6 rounded transition-all"
                    >
                      Configure Another Route
                    </button>
                    <button
                      onClick={onClose}
                      className="bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-semibold text-xs uppercase tracking-wider py-2 px-6 rounded transition-all"
                    >
                      Finish Setup
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* OUR STORY MODAL */}
          {type === 'story' && (
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="text-[#C9922B] font-mono tracking-widest text-xs uppercase block mb-1">Nostalgia & Heritage</span>
                <h2 className="font-display font-black text-3xl text-[#6B1A1A]">OUR JOURNEY</h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="h-[1px] w-12 bg-[#C9922B]"></span>
                  <span className="text-xs text-[#5C3D2E] font-accent italic">The Tapri Story</span>
                  <span className="h-[1px] w-12 bg-[#C9922B]"></span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#2C1810] leading-relaxed font-sans">
                <p>
                  Every Indian who has ever traveled by train knows the magic of the railways. It begins before you even step on board, at the platform, as the steam fills the air and vendors cry out, <em>"Chai! Garam Chai! Cutting Chai!"</em>
                </p>
                <p>
                  Those platforms are melting pots. They are places where corporate executives sit on wooden benches next to students, workers, and travelers, sharing a clay kulhad of ginger tea and trading life stories. It is here that strangers become companions, and food is the ultimate thread that binds everyone together.
                </p>
                <div className="p-4 bg-[#EDE4D0]/40 rounded-lg border-l-4 border-[#C9922B] my-4 italic text-sm text-[#5C3D2E] font-accent">
                  "Our founders spent years traveling the Indian subcontinent by rail, collecting recipes, listening to stationmasters, and capturing the warmth of regional railway canteens. When we came to Bangkok, we wanted to build that very refuge — a home away from home."
                </div>
                <p>
                  At Tapri Junction, we bring you the authentic culinary tracks of India, re-imagined with high-quality ingredients and spotless, elegant presentation in Bangkok. Our cutting chai is slow-brewed exactly how it is on Mumbai platforms; our Bun Maska uses genuine butter toasted to golden perfection; our tiffins represent the loving home care of an Indian mother.
                </p>
                <p>
                  Whether you are an expat seeking nostalgic comfort, a busy professional looking for a wholesome daily lunch, or a food lover eager to experience authentic heritage tea culture, we welcome you to pull up a seat, take a sip, and let our flavors take you on an unforgettable journey.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C9922B]/20 text-center">
                <button
                  onClick={onClose}
                  className="bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white font-sans font-semibold text-xs uppercase tracking-wider py-2.5 px-8 rounded-full transition-all duration-300"
                >
                  Return to Station
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
