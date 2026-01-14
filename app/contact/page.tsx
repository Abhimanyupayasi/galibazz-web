import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full bg-white/90 backdrop-blur border border-gray-200 rounded-3xl shadow-lg p-8 md:p-10">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact <span className="bg-gradient-to-r from-green-600 to-teal-400 bg-clip-text text-transparent">Galibazz</span>
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Have an idea, suggestion, or request? Let’s talk 🙂
            </p>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/mvoeykkn"
            method="POST"
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="
                  mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-400/40 focus:border-green-500
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@email.com"
                className="
                  mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-400/40 focus:border-green-500
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us what you need..."
                className="
                  mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-400/40 focus:border-green-500
                  resize-none transition
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full bg-yellow-400 hover:bg-yellow-300 
                text-black font-bold py-3 rounded-full 
                shadow-md hover:shadow-lg transition
              "
            >
              Send Message
            </button>
          </form>

          {/* Footer text */}
          <p className="text-xs text-gray-500 text-center mt-6">
            We usually reply within 24 hours.
          </p>
        </div>
      </main>
    </>
  );
}
