import '../styles/about.css'


function About() {
  return (
    <div className="about">

      <div className="about-hero">
        <h1>Про нас</h1>
        <p>Ми — українська меблева компанія "ДУБ". Створюємо меблі з натурального дерева які служать десятиліттями. Кожен виріб — це поєднання традиційного ремесла і сучасного дизайну.</p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <span>🌳</span>
          <h3>Натуральне дерево</h3>
          <p>Використовуємо тільки екологічно чисту деревину</p>
        </div>
        <div className="about-card">
          <span>🚚</span>
          <h3>Доставка по Україні</h3>
          <p>Привеземо замовлення в будь-яке місто</p>
        </div>
        <div className="about-card">
          <span>✅</span>
          <h3>Гарантія 5 років</h3>
          <p>Впевнені в якості кожного виробу</p>
        </div>
      </div>

    </div>
  )
}

export default About