export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-between px-8 py-16">
      {/* Header */}
      <header className="bg-purple-600 w-full text-center text-3xl font-bold text-black py-4">
        RESUME
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mt-8">
        {/* Left Section */}
        <section className="bg-black border border-purple-600 p-6 rounded-lg">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-600"></div>
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Yodsapad Soontarawong
            </h2>
            <p className="text-sm">
              Hello! I am Yodsapad Soontarawong, passionate about learning new things and embracing challenges at work.
            </p>
          </div>
        </section>

        {/* Right Section */}
        <section className="bg-black border border-purple-600 p-6 rounded-lg flex flex-col justify-between">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Skills</h3>
            <ul className="list-disc list-inside text-sm">
              <li>JavaScript, CSS</li>
              <li>TailwindCSS</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
              Projects
            </h3>
            <p className="text-sm">
              <strong className="text-purple-600">UP TALK</strong>: Designed UI for the UP Talk website. This
              project focused on designing an intuitive user interface for a web
              platform that helps professionals communicate better.{" "}
              <a
                href="https://www.figma.com/design/EJYu3eUF2BW1zP9lpoFjMx/Figma-17?node-id=22-2&node-type=canvas"
                className="text-purple-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the project in detail on Figma
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
              Contact
            </h3>
            <p className="text-sm">Feel free to reach out to me through the following channels:</p>
            <ul className="text-sm">
              <li>Email: 66022871@up.ac.th</li>
              <li>Phone: 0961323405</li>
              <li>
                Facebook:{" "}
                <a
                  href="https://web.facebook.com/padsayod.wongratasoon"
                  className="text-purple-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Profile
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 w-full text-center text-sm text-black py-4 mt-8">
        © 2024 Yodsapad Soontarawong. All rights reserved.
      </footer>
    </div>
  );
}
