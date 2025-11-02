import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name.length < 3 || form.message.length < 10 || !form.email.includes('@')) return
    setSuccess(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <form className="mx-auto col-md-6" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} className="form-control mb-2" placeholder="Nombre" required minLength={3} />
      <input name="email" value={form.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" required type="email" />
      <input name="subject" value={form.subject} onChange={handleChange} className="form-control mb-2" placeholder="Asunto" required />
      <textarea name="message" value={form.message} onChange={handleChange} className="form-control mb-2" placeholder="Mensaje" minLength={10} required></textarea>
      <button className="btn btn-warning w-100">Enviar</button>
      {success && <div className="alert alert-success mt-3">Mensaje enviado correctamente 🎉</div>}
    </form>
  )
}

export default ContactForm
