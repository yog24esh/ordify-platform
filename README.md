# ORDIFY Platform

ORDIFY is a full-stack quick-commerce platform inspired by Blinkit, Zepto, and Instamart.  
It is being developed as a team project using **Spring Boot (Backend)** and **React (Frontend)** with a clean, scalable, industry-aligned architecture.

This repository is the **central platform repository** for all backend and frontend development.

---

## 🧭 Project Vision

ORDIFY aims to provide:

- Multi dark-store support  
- Nearest-store order fulfillment  
- Real-time order lifecycle  
- Delivery partner workflow  
- Store admin and super-admin management  

The long-term goal is to evolve this into a **REST-first, modular, scalable platform**.

---

## 🏗️ Architecture Overview

### Backend Architecture

- Monolithic Spring Boot application  
- **Package-by-feature (domain-based) structure**  
- Layered inside each feature:
  - Controller  
  - Service  
  - Repository  
  - Entity  
  - DTO  

High-level backend package structure:

com.ordify
├── config
├── common
├── user
├── store
├── inventory
├── order
├── delivery
└── admin


Each domain is isolated to ensure:

- High cohesion  
- Low coupling  
- Easy parallel development  
- Future microservice readiness  

---

### Frontend Architecture (Planned)

- React (Vite)  
- Role-based routing  
- API layer isolation  
- Domain-based page separation  

Planned frontend structure:

ordify-frontend
├── api
├── auth
├── routes
├── layouts
├── pages
├── components
└── store


---

## 🛠️ Technology Stack

### Backend

- Java 17 or higher  
- Spring Boot 3.x  
- Spring Web (REST / MVC)  
- Spring Data JPA (later phase)  
- Flyway (database migrations – later phase)  
- Maven  
- Embedded Tomcat  

### Frontend

- React (Vite)  
- Axios  
- React Router  
- Later: Redux or Context API  

### Database (Later Phase)

- MySQL or PostgreSQL  

### Tooling

- Git and GitHub  
- Branch protection with PR-based workflow  
- Java 21 (local runtime)  

---

## 🌿 Branching Model

This repository follows a **professional Git branching strategy**.

### Protected Branches

| Branch   | Purpose                                  |
|---------|------------------------------------------|
| `main`  | Stable baseline (release-ready branch)   |
| `develop` | Integration branch for active development |

Direct pushes to these branches are **not allowed** for normal developers.

---

### Feature Branch Workflow

Every developer must work on a **feature branch**.

Branch naming convention:
feature/<domain-name>

Examples:
feature/user
feature/order
feature/inventory
feature/delivery



---

## 🔁 Daily Developer Workflow

1️⃣ Clone the Repository
git clone https://github.com/yog24esh/ordify-platform.git
cd ordify-platform

2️⃣ Always Start From develop
git checkout develop
git pull

3️⃣ Create Your Feature Branch
git checkout -b feature/<your-domain>
Ex: git checkout -b feature/user

4️⃣ Work Only Inside Your Domain Package

Rules:
Do NOT change base package structure
Do NOT modify other domains
Add code only inside:
com.ordify.<your-domain>

5️⃣ Commit Your Changes
Use meaningful commit messages:
git add .
git commit -m "feat(user): add user entity and repository"
Commit message format:
type(scope): short description
Examples:
feat(order): add order creation endpoint
fix(user): handle duplicate email case
chore: update documentation

6️⃣ Push Your Feature Branch
git push -u origin feature/<your-domain>

7️⃣ Create Pull Request (PR)
On GitHub:
Base branch: develop
Compare branch: feature/<your-domain>

Rules:
At least 1 reviewer approval required
No direct push to develop
All merges through Pull Requests only

🛡️ Branch Protection Rules
main is fully protected
develop is protected
Only PR-based merges allowed
Only admin can bypass rules

This ensures:

Clean history
Reviewed code
No accidental breaks

🚀 How to Run Backend Locally
From ordify-backend directory:
./mvnw spring-boot:run

Default port:
http://localhost:8080


Note:
Database is intentionally disabled in the base skeleton.
Enable database only when adding first schema and repositories.

📂 Repository Structure
ordify-platform
├── ordify-backend
│   ├── src/main/java/com/ordify
│   ├── src/main/resources
│   └── pom.xml
│
└── ordify-frontend   (to be added later)

🔴 Important Team Rules
Never change base package structure
Never push directly to main or develop
Always work in feature branches

Do not commit:
target/
.metadata/
node_modules/
IDE files

Follow domain boundaries strictly

📈 Future Roadmap
Enable database and Flyway
Add core entities: User, Store, Order, Inventory
Implement order lifecycle
Add delivery workflow
Integrate Google Maps
Add authentication and roles
Add frontend application

👥 Team and Ownership
Repository Admin: Project Lead
Branch Governance: Pull Request based only
Architecture changes require team discussion




