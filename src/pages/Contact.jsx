import '../styles/contact.css'


function Contact() {
  return (
    <div className="contact">

      <div className="contact-info">
        <h1>Контакти</h1>
        <p>📍 м. Ковель, вул. Незалежності 12</p>
        <p>📞 +38 (050) 123-45-67</p>
        <p>✉️ info@dub-furniture.ua</p>
      </div>

      <div className="contact-form">
        <h2>Написати нам</h2>
        <input type="text" placeholder="Ваше ім'я" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Повідомлення" rows="5" />
        <button>Надіслати</button>
      </div>

    </div>
  )
}

export default Contact