'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const STRAPI_URL = 'https://tvk-backend-production.up.railway.app';
const SANTHOSH_PHONE = '919994558325'; // Update with real number

const CATEGORIES = [
  { value: 'water',       label: '💧 குடிநீர் பிரச்சினை',      en: 'Water Issue'      },
  { value: 'electricity', label: '⚡ மின்சார பிரச்சினை',        en: 'Electricity Issue' },
  { value: 'road',        label: '🛣️ சாலை பிரச்சினை',          en: 'Road Issue'        },
  { value: 'ration',      label: '🏪 ரேஷன் கடை பிரச்சினை',    en: 'Ration Issue'      },
  { value: 'drainage',    label: '🚰 வடிகால் பிரச்சினை',       en: 'Drainage Issue'    },
  { value: 'health',      label: '🏥 சுகாதார பிரச்சினை',       en: 'Health Issue'      },
  { value: 'education',   label: '📚 கல்வி பிரச்சினை',         en: 'Education Issue'   },
  { value: 'other',       label: '📋 வேறு பிரச்சினை',           en: 'Other Issue'       },
];

const AREAS = [
  'நெய்தலூர் காலனி (Neidhalur Colony)',
  'பனையூர் (Panaiyur)',
  'சின்னபனையூர் (Chinnapanaiyur)',
  'செப்லாப்பட்டி (Seplapatti)',
  'தாளிஞ்சி (Thalinji)',
  'அலத்தூர் (Alathur)',
  'மற்ற பகுதி (Other Area)',
];

const EMPTY = { name:'', phone:'', category:'', area:'', description:'', address:'' };

export default function SubmitPage() {
  const [form,     setForm]    = useState(EMPTY);
  const [step,     setStep]    = useState(1); // 1=form, 2=success
  const [loading,  setLoading] = useState(false);
  const [error,    setError]   = useState('');
  const [ticketId, setTicketId]= useState('');

  const handleChange = (k, v) => {
    setForm(p => ({ ...p, [k]: v }));
    if (error) setError('');
  };

  const validate = () => {
    if (!form.name.trim())        return 'பெயர் உள்ளிடவும்';
    if (!form.phone.match(/^\d{10}$/)) return 'சரியான 10 இலக்க தொலைபேசி எண் உள்ளிடவும்';
    if (!form.category)           return 'பிரச்சினை வகை தேர்வு செய்யவும்';
    if (!form.area)               return 'பகுதி தேர்வு செய்யவும்';
    if (!form.description.trim()) return 'பிரச்சினை விவரம் உள்ளிடவும்';
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    try {
      setLoading(true);
      const cat     = CATEGORIES.find(c => c.value === form.category);
      const ticket  = `TVK-${Date.now().toString().slice(-6)}`;

      // Post to Strapi issues
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:        form.name,
          phone:       form.phone,
          category:    form.category,
          area:        form.area,
          address:     form.address,
          description: form.description,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setTicketId(ticket);
      setStep(2);

    } catch (e) {
      setError('சமர்ப்பிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = `🔴 புதிய பிரச்சினை பதிவு
━━━━━━━━━━━━━━━━
🎫 Ticket: ${ticketId}
👤 பெயர்: ${form.name}
📞 தொலைபேசி: ${form.phone}
📍 பகுதி: ${form.area}
🔖 வகை: ${CATEGORIES.find(c=>c.value===form.category)?.label||form.category}
📝 விவரம்: ${form.description}
━━━━━━━━━━━━━━━━
TVK CRM Portal`;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '71px', minHeight: '100vh', background: '#f8f4ff' }}>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #990500, #5a0200)',
          padding: '40px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(255,221,0,0.15)',
              border: '2px solid rgba(255,221,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', fontSize: 28,
            }}>📋</div>
            <p style={{ color: '#FFDD00', fontWeight: 700, fontSize: 12, letterSpacing: '2px', marginBottom: 8 }}>
              தமிழக வெற்றிக் கழகம்
            </p>
            <h1 style={{ color: 'white', fontSize: 'clamp(22px,5vw,32px)', fontWeight: 900, marginBottom: 8 }}>
              பிரச்சினை பதிவு படிவம்
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              உங்கள் பிரச்சினையை பதிவு செய்யுங்கள் — நாங்கள் தீர்க்கிறோம்
            </p>
          </div>
        </div>
        <div style={{ height: 4, background: '#FFDD00' }} />

        <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 16px 60px' }}>

          {/* Step 1 — Form */}
          {step === 1 && (
            <div style={{
              background: 'white', borderRadius: 20,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}>
              {/* Form header */}
              <div style={{
                background: '#FFF8E1', padding: '16px 24px',
                borderBottom: '2px solid #FFDD00',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: '#990500', color: '#FFDD00',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: 14,
                }}>1</div>
                <div>
                  <p style={{ fontWeight: 800, color: '#990500', margin: 0, fontSize: 15 }}>
                    உங்கள் தகவலை பதிவு செய்யுங்கள்
                  </p>
                  <p style={{ color: '#C8910A', fontSize: 11, margin: 0 }}>
                    அனைத்து தகவல்களும் கட்டாயம் (*) பதிவிட வேண்டும்
                  </p>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                {/* Name */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#990500', display: 'block', marginBottom: 6 }}>
                    👤 பெயர் *
                  </label>
                  <input
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    placeholder="உங்கள் பூரண பெயர்"
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 12,
                      border: '1.5px solid #e8e0ff', fontSize: 14,
                      background: '#f8f4ff', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#990500', display: 'block', marginBottom: 6 }}>
                    📞 தொலைபேசி எண் *
                  </label>
                  <input
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value.replace(/\D/g,'').slice(0,10))}
                    placeholder="10 இலக்க மொபைல் எண்"
                    type="tel" maxLength={10}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 12,
                      border: '1.5px solid #e8e0ff', fontSize: 14,
                      background: '#f8f4ff', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Category */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#990500', display: 'block', marginBottom: 8 }}>
                    🔖 பிரச்சினை வகை *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {CATEGORIES.map(c => (
                      <button key={c.value} onClick={() => handleChange('category', c.value)}
                        style={{
                          padding: '10px 12px', borderRadius: 10, fontSize: 12,
                          fontWeight: 600, cursor: 'pointer', textAlign: 'left',
                          transition: 'all 0.15s',
                          background: form.category === c.value ? '#990500' : '#f8f4ff',
                          color: form.category === c.value ? '#FFDD00' : '#555',
                          border: `1.5px solid ${form.category === c.value ? '#990500' : '#e8e0ff'}`,
                        }}>
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#990500', display: 'block', marginBottom: 6 }}>
                    📍 உங்கள் பகுதி / வார்டு *
                  </label>
                  <select
                    value={form.area}
                    onChange={e => handleChange('area', e.target.value)}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 12,
                      border: '1.5px solid #e8e0ff', fontSize: 14,
                      background: '#f8f4ff', outline: 'none',
                      boxSizing: 'border-box', color: form.area ? '#333' : '#aaa',
                    }}>
                    <option value="">-- பகுதி தேர்வு செய்யவும் --</option>
                    {AREAS.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#555', display: 'block', marginBottom: 6 }}>
                    🏠 முகவரி (விரும்பினால்)
                  </label>
                  <input
                    value={form.address}
                    onChange={e => handleChange('address', e.target.value)}
                    placeholder="வீட்டு எண், தெரு பெயர்"
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 12,
                      border: '1.5px solid #e8e0ff', fontSize: 14,
                      background: '#f8f4ff', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Description */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#990500', display: 'block', marginBottom: 6 }}>
                    📝 பிரச்சினை விவரம் *
                  </label>
                  <textarea
                    value={form.description}
                    onChange={e => handleChange('description', e.target.value)}
                    placeholder="உங்கள் பிரச்சினையை தெளிவாக விவரிக்கவும்..."
                    rows={4}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 12,
                      border: '1.5px solid #e8e0ff', fontSize: 14,
                      background: '#f8f4ff', outline: 'none', resize: 'vertical',
                      boxSizing: 'border-box', fontFamily: 'inherit',
                    }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div style={{
                    background: '#fff0f0', border: '1px solid #fca5a5',
                    borderRadius: 10, padding: '10px 14px', marginBottom: 16,
                    fontSize: 13, color: '#dc2626', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    ⚠️ {error}
                  </div>
                )}

                {/* Submit */}
                <button onClick={handleSubmit} disabled={loading}
                  style={{
                    width: '100%', padding: '14px', borderRadius: 14,
                    background: loading ? '#ccc' : '#990500',
                    color: '#FFDD00', border: 'none', fontWeight: 900,
                    fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s',
                  }}>
                  {loading ? '⏳ சமர்ப்பிக்கிறது...' : '✅ பிரச்சினை பதிவு செய்யவும்'}
                </button>

                <p style={{ textAlign: 'center', fontSize: 11, color: '#aaa', marginTop: 12 }}>
                  உங்கள் தகவல் பாதுகாப்பாக வைக்கப்படும் 🔒
                </p>
              </div>
            </div>
          )}

          {/* Step 2 — Success */}
          {step === 2 && (
            <div style={{
              background: 'white', borderRadius: 20,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden', textAlign: 'center',
            }}>
              {/* Success header */}
              <div style={{ background: '#16a34a', padding: '32px 24px' }}>
                <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
                <h2 style={{ color: 'white', fontSize: 22, fontWeight: 900, margin: '0 0 8px' }}>
                  பிரச்சினை பதிவு செய்யப்பட்டது!
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, margin: 0 }}>
                  உங்கள் பிரச்சினை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது
                </p>
              </div>

              <div style={{ padding: '28px 24px' }}>
                {/* Ticket ID */}
                <div style={{
                  background: '#f0fff4', border: '2px solid #86efac',
                  borderRadius: 14, padding: '16px', marginBottom: 20,
                }}>
                  <p style={{ fontSize: 11, color: '#16a34a', fontWeight: 700, margin: '0 0 4px' }}>
                    உங்கள் பிரச்சினை எண்
                  </p>
                  <p style={{ fontSize: 24, fontWeight: 900, color: '#15803d', margin: 0, letterSpacing: '0.1em' }}>
                    {ticketId}
                  </p>
                  <p style={{ fontSize: 11, color: '#aaa', margin: '4px 0 0' }}>
                    இந்த எண்ணை வைத்திருங்கள்
                  </p>
                </div>

                {/* Summary */}
                <div style={{
                  background: '#f8f4ff', borderRadius: 12, padding: '16px',
                  textAlign: 'left', marginBottom: 20,
                }}>
                  {[
                    { label: '👤 பெயர்', value: form.name },
                    { label: '📞 தொலைபேசி', value: form.phone },
                    { label: '📍 பகுதி', value: form.area },
                    { label: '🔖 வகை', value: CATEGORIES.find(c=>c.value===form.category)?.label },
                  ].map(({ label, value }) => (
                    <div key={label} style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '7px 0', borderBottom: '1px solid #ede9fe',
                      fontSize: 13,
                    }}>
                      <span style={{ color: '#888' }}>{label}</span>
                      <span style={{ fontWeight: 600, color: '#333' }}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp notify */}
                <a href={`https://wa.me/${SANTHOSH_PHONE}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: '#25D366', color: 'white', textDecoration: 'none',
                    padding: '14px', borderRadius: 14, fontWeight: 800, fontSize: 15,
                    marginBottom: 12,
                  }}>
                  <span style={{ fontSize: 20 }}>💬</span>
                  WhatsApp மூலம் அனுப்பவும்
                </a>

                <button onClick={() => { setStep(1); setForm(EMPTY); setError(''); }}
                  style={{
                    width: '100%', padding: '12px', borderRadius: 12,
                    background: '#f8f4ff', border: '1.5px solid #e8e0ff',
                    color: '#666', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  }}>
                  மேலும் ஒரு பிரச்சினை பதிவு செய்ய
                </button>

                <div style={{
                  marginTop: 20, padding: 16, background: '#FFF8E1',
                  borderRadius: 12, border: '1px solid #FFDD00',
                }}>
                  <p style={{ fontSize: 12, color: '#C8910A', fontWeight: 700, margin: '0 0 4px' }}>
                    📲 என்ன நடக்கும்?
                  </p>
                  <p style={{ fontSize: 12, color: '#666', margin: 0, lineHeight: 1.8 }}>
                    உங்கள் வார்டு ஒருங்கிணைப்பாளர் 24 மணி நேரத்தில் தொடர்பு கொள்வார்.
                    பிரச்சினை தீர்வு பெற்றவுடன் உங்களுக்கு தெரிவிக்கப்படும்.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Info cards */}
          {step === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
              {[
                { emoji: '⚡', title: '24 மணி நேரம்', sub: 'பதில் உறுதி' },
                { emoji: '🔒', title: 'பாதுகாப்பானது', sub: 'தகவல் ரகசியம்' },
                { emoji: '📱', title: 'SMS/Call', sub: 'மேம்படுத்தல் தகவல்' },
                { emoji: '✅', title: 'இலவசம்', sub: 'எந்த கட்டணமும் இல்லை' },
              ].map(({ emoji, title, sub }) => (
                <div key={title} style={{
                  background: 'white', borderRadius: 12, padding: '14px',
                  textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(153,5,0,0.08)',
                }}>
                  <p style={{ fontSize: 24, margin: '0 0 6px' }}>{emoji}</p>
                  <p style={{ fontSize: 12, fontWeight: 800, color: '#990500', margin: '0 0 2px' }}>{title}</p>
                  <p style={{ fontSize: 10, color: '#aaa', margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
