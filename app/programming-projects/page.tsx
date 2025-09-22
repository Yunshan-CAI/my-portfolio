import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Programming Projects' })

export default function ProgrammingProjects() {
  return (
    <div>
      <h1>Programming Projects</h1>

      <div>
        <div>
          <h2>QuickBite Delivery 🍽️</h2>
          <p>
            A restaurant delivery platform backend built with Spring Boot. Features comprehensive
            backstage management for dishes, categories, and orders, with Redis caching for improved
            performance and transactional operations for data integrity.
          </p>
          <p>Technologies: Spring Boot, MyBatis-Plus, Redis, Spring Cache, MySQL</p>
          <a href="https://github.com/Yunshan-CAI/QuickBite_Delivery" target="_blank">
            View on GitHub
          </a>
        </div>

        <br />

        <div>
          <h2>Secret Whisper 🕵️‍♂️🔐</h2>
          <p>
            A web application that allows users to share and manage their secrets. Features dual
            authentication (username/password and Google OAuth2), secure password hashing with
            bcrypt, and PostgreSQL database for data storage.
          </p>
          <p>Technologies: Node.js, Express.js, EJS, PostgreSQL, Passport.js, OAuth2</p>
          <a href="https://github.com/Yunshan-CAI/Secret-Whisper" target="_blank">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
