import { useState } from "react"
import "./App.css"

import Window from "./components/Window"
import ProjectsWindow from "./components/ProjectsWindow"
import AboutWindow from "./components/AboutWindow"
import ResumeWindow from "./components/ResumeWindow"
import ContactWindow from "./components/ContactWindow"

type WindowName =
  | "about"
  | "projects"
  | "ai"
  | "markets"
  | "performance"
  | "resume"
  | "contact"

function App() {
  const [openWindows, setOpenWindows] = useState<WindowName[]>([])

  const [isShuttingDown, setIsShuttingDown] = useState(false)

  const [isTurningOn, setIsTurningOn] = useState(false)

  const [activeWindow, setActiveWindow] =
    useState<WindowName | null>(null)

  const [zIndexes, setZIndexes] = useState<
    Record<string, number>
  >({})
  
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [programsMenuOpen, setProgramsMenuOpen] = useState(false)
  const [nextZIndex, setNextZIndex] = useState(10)
  const [minimizedWindows, setMinimizedWindows] =
    useState<WindowName[]>([])

   const minimizeWindow = (name: WindowName) => {
  setMinimizedWindows((current) => {
    if (current.includes(name)) {
      return current
    }

    return [...current, name]
  })
}

  const openWindow = (name: WindowName) => {
  setOpenWindows((current) => {
    if (current.includes(name)) {
      return current
    }

    return [...current, name]
  })

  setMinimizedWindows((current) =>
    current.filter((window) => window !== name)
  )

  setActiveWindow(name)

  setZIndexes((current) => ({
    ...current,
    [name]: nextZIndex,
  }))

  setNextZIndex((current) => current + 1)
}

const launchFromStart = (name: WindowName) => {
  openWindow(name)
  setStartMenuOpen(false)
}

 const shutdownSystem = () => {
  setStartMenuOpen(false)
  setProgramsMenuOpen(false)

  const audio = new Audio("/sounds/shutdown.mp3")

  audio.volume = 0.8
  audio.play().catch(() => {})

  setIsShuttingDown(true)
}

const startSystem = () => {
  const audio = new Audio("/sounds/startup.mp3")
  audio.volume = 0.8
  audio.play().catch(() => {})

  setIsTurningOn(true)

  setTimeout(() => {
    setIsShuttingDown(false)
    setIsTurningOn(false)
  }, 700)
}

  const closeWindow = (name: WindowName) => {
    setOpenWindows((current) =>
      current.filter((window) => window !== name)
    )

    setActiveWindow((current) =>
      current === name ? null : current
    )
  }

  const focusWindow = (name: WindowName) => {
    setActiveWindow(name)

    setZIndexes((current) => ({
      ...current,
      [name]: nextZIndex,
    }))

    setNextZIndex((current) => current + 1)
  }

  const getWindowTitle = (name: WindowName): string => {
    switch (name) {
      case "about":
        return "About Me - MihirOS"

      case "projects":
  return "Projects - MihirOS"

      case "resume":
        return "Resume - MihirOS"

      case "contact":
        return "Contact - MihirOS"

      default:
      return "MIHIR_OS"
    }
  }

  const getWindowContent = (name: WindowName) => {
    switch (name) {
      case "about":
  return <AboutWindow />

      case "projects":
  return <ProjectsWindow />

      case "resume":
  return <ResumeWindow /> 

      case "contact":
  return <ContactWindow />
    }
  }

  return (
    <main className="os-desktop">

      {/* =========================
          TOP MENU BAR
      ========================= */}

      <header className="os-menubar">

        <div className="os-menu-left">
          <span className="os-logo">M</span>

          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Help</span>
        </div>

        <div className="os-menu-right">
          <span>● Online</span>
          <span>MIHIR_OS</span>
        </div>

      </header>


      {/* =========================
          DESKTOP
      ========================= */}

      <section className="desktop-area">

        {/* Desktop icons */}

        <div className="desktop-icons">

          <button
            className="desktop-icon"
            onDoubleClick={() =>
              openWindow("about")
            }
          >
            <div className="icon-image pixel-icon icon-user">
  <div className="user-head" />
  <div className="user-body" />
</div>

            <span>About Me</span>
          </button>

            <button
  className="desktop-icon"
  onDoubleClick={() =>
    window.open(
      "https://github.com/mihir-padekar",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  <div className="desktop-icon-image github-icon">
    <svg
      viewBox="0 0 64 64"
      width="38"
      height="38"
      aria-hidden="true"
    >
      {/* head */}
      <circle cx="32" cy="27" r="15" fill="#000" />

      {/* ears */}
      <polygon points="18,17 14,11 22,14" fill="#000" />
      <polygon points="46,17 50,11 42,14" fill="#000" />

      {/* face cutout */}
      <rect x="23" y="22" width="4" height="5" fill="#fff" />
      <rect x="37" y="22" width="4" height="5" fill="#fff" />

      {/* body */}
      <path
        d="
          M17 39
          C10 42 8 49 10 55
          L18 55
          L18 47
          C20 50 23 52 27 53
          L27 59
          L37 59
          L37 53
          C41 52 44 50 46 47
          L46 55
          L54 55
          C56 49 54 42 47 39
          C43 37 39 36 32 36
          C25 36 21 37 17 39
          Z
        "
        fill="#000"
      />

      {/* white chest */}
      <rect x="28" y="43" width="8" height="8" fill="#fff" />
    </svg>
  </div>

  <span>GitHub</span>
</button>
          <button
            className="desktop-icon"
            onDoubleClick={() =>
              openWindow("projects")
            }
          >
            <div className="icon-image pixel-icon icon-computer">
  <div className="computer-screen" />
  <div className="computer-stand" />
</div>

            <span>Projects</span>
          </button>

          <button
            className="desktop-icon"
            onDoubleClick={() =>
              openWindow("resume")
            }
          >
            <div className="icon-image pixel-icon icon-document">
  <div className="document-lines" />
</div>

            <span>Resume</span>
          </button>


          <button
            className="desktop-icon"
            onDoubleClick={() =>
              openWindow("contact")
            }
          >
            <div className="icon-image pixel-icon icon-mail">
  <div className="mail-flap" />
</div>

            <span>Contact</span>
          </button>

        </div>


        {/* =========================
            WELCOME WINDOW
        ========================= */}

        <section className="os-window welcome-window">

          <div className="window-titlebar">

            <span>
              Welcome - MihirOS
            </span>

            <div className="window-buttons">

              <button>_</button>
              <button>□</button>

            </div>

          </div>


          <div className="window-content">

  <div className="welcome-label">
    MIHIR_OS / SYSTEM PROFILE
  </div>

  <h1>
    MIHIR PADEKAR
  </h1>

  <h2>
    Full-Stack Developer + AI
  </h2>

  <p>
    Building software across web engineering,
    artificial intelligence, machine learning
    and quantitative systems.
  </p>

  <div className="system-divider" />

  <div className="system-info">

    <div>
      <span>STATUS</span>
      <strong>ONLINE</strong>
    </div>

    <div>
      <span>SYSTEM</span>
      <strong>MIHIR_OS</strong>
    </div>

    <div>
      <span>VERSION</span>
      <strong>2026.1</strong>
    </div>

  </div>

  <p className="welcome-description">
    Welcome to MIHIR_OS.
    <br />
    Double-click an application on the
    desktop to explore my work.
    YES THE SHUTDOWN BUTTON WORKS, TRY IT OUT!
  </p>

</div>


          <div className="window-statusbar">
            <span>Ready</span>
            <span>
              {openWindows.length} applications open
            </span>
          </div>

        </section>


        {/* =========================
            OPEN WINDOWS
        ========================= */}

        {openWindows.map((name) => (
        <Window
  key={name}
  title={getWindowTitle(name)}
  onClose={() => closeWindow(name)}
  onFocus={() => focusWindow(name)}
  onMinimize={() => minimizeWindow(name)}
  zIndex={zIndexes[name] ?? 10}
  isMinimized={minimizedWindows.includes(name)}
>
  {getWindowContent(name)}
</Window>
      ))}
      </section>


      {/* =========================
          TASKBAR
      ========================= */}

      <footer className="os-taskbar">

        <button
  className={
    startMenuOpen
      ? "start-button pressed"
      : "start-button"
  }
  onClick={() =>
    setStartMenuOpen((current) => !current)
  }
>
  <span className="start-logo">
    M
  </span>

  <strong>START</strong>
</button>
{startMenuOpen && (
  <div className="start-menu">

    <div className="start-menu-header">
      <span className="start-menu-logo">
        M
      </span>

      <div>
        <strong>MIHIR_OS</strong>
        <small>Personal Computer</small>
      </div>
    </div>


    <div className="start-menu-body">

  {/* PROGRAMS */}

  <div className="start-menu-item-wrapper">

    <button
      className={
        programsMenuOpen
          ? "start-menu-item selected"
          : "start-menu-item"
      }
      onClick={() =>
        setProgramsMenuOpen(
          (current) => !current
        )
      }
    >
      <span>📁</span>

      <div>
        <strong>Programs</strong>
        <small>Software & applications</small>
      </div>

      <span className="menu-arrow">
        ▶
      </span>
    </button>


    {programsMenuOpen && (
      <div className="start-submenu">

        <div className="submenu-title">
          PROGRAMS
        </div>


        <button
          onClick={() =>
            launchFromStart("projects")
          }
        >
          <span>💻</span>

          <div>
            <strong>Projects</strong>
            <small>Software engineering</small>
          </div>
        </button>


        <button
          onClick={() =>
            launchFromStart("ai")
          }
        >
          <span>🧠</span>

          <div>
            <strong>AI / ML</strong>
            <small>Machine learning</small>
          </div>
        </button>


        <button
          onClick={() =>
            launchFromStart("markets")
          }
        >
          <span>📈</span>

          <div>
            <strong>Trading</strong>
            <small>Markets & quantitative work</small>
          </div>
        </button>


        <button
          onClick={() =>
            launchFromStart("performance")
          }
        >
          <span>🏋️</span>

          <div>
            <strong>Performance</strong>
            <small>Fitness & tracking</small>
          </div>
        </button>

      </div>
    )}

  </div>


  {/* DOCUMENTS */}

  <button
    className="start-menu-item"
    onClick={() =>
      launchFromStart("resume")
    }
  >
    <span>📄</span>

    <div>
      <strong>Documents</strong>
      <small>Resume & certifications</small>
    </div>
  </button>


  {/* SYSTEM */}

  <div className="start-menu-item-wrapper">

    <button className="start-menu-item">
      <span>⚙️</span>

      <div>
        <strong>System</strong>
        <small>About this computer</small>
      </div>

      <span className="menu-arrow">
        ▶
      </span>
    </button>

  </div>


  <div className="start-menu-separator" />


  {/* CONTACT */}

  <button
    className="start-menu-item"
    onClick={() =>
      launchFromStart("contact")
    }
  >
    <span>✉️</span>

    <div>
      <strong>Contact</strong>
      <small>Get in touch</small>
    </div>
  </button>

</div>


{/* FOOTER */}

<div className="start-menu-footer">

  <button>
    🔒 Lock
  </button>

  <button onClick={shutdownSystem}>
  ⏻ Shut Down
</button>

</div>

  </div>
)}

        <div className="taskbar-divider" />


        <button className="taskbar-item active">
          🖥️ Welcome - MihirOS
        </button>


        {openWindows.map((name) => (
  <button
    key={name}
    className={
      activeWindow === name &&
      !minimizedWindows.includes(name)
        ? "taskbar-item active"
        : "taskbar-item"
    }
    onClick={() => {
  setMinimizedWindows((current) =>
    current.filter((window) => window !== name)
  )

  focusWindow(name)
}}
  >
    {getWindowTitle(name)}
  </button>
))}


        <div className="taskbar-spacer" />


        <div className="system-tray">
          <span>●</span>
          <span>ENG</span>
          <span>12:42 PM</span>
        </div>

      </footer>
    {isShuttingDown && (
  <div
  className={
    isTurningOn
      ? "shutdown-screen turning-on"
      : "shutdown-screen"
  }
>

    <div className="shutdown-box">

      <div className="shutdown-logo">
        M
      </div>

      <div className="shutdown-title">
        MIHIR_OS
      </div>

      <div className="shutdown-status">
        SYSTEM IS OFF
      </div>

      <button
        className="power-on-button"
        onClick={startSystem}
      >
        ⏻ TURN ON
      </button>

    </div>

  </div>
)}
    </main>
  )
}

export default App