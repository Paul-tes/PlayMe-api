// src/pages/api/hello.js (for Pages Router)
// or
// src/app/api/hello/route.js (for App Router)
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API!' });
}
