"use client";
import { useEffect } from "react";

const features = [
  {
    title: "Real-time updates",
    description:
      "Stream FileMaker changes to connected clients instantly, without polling or manual refresh cycles.",
  },
  {
    title: "Elastic scalability",
    description:
      "Horizontally scale the MPC layer to accommodate spikes in client traffic and automation workloads.",
  },
  {
    title: "Security by design",
    description:
      "Isolate business logic, enforce role-based access, and observe every event with centralized auditing.",
  },
  {
    title: "Cross-database potential",
    description:
      "Bridge FileMaker data to SQL, NoSQL, and analytics platforms using event-driven connectors.",
  },
];

const faqs = [
  {
    question: "Is the MPC server an official Claris product?",
    answer:
      "MPC is a companion service layered on top of FileMaker Server. It is delivered by partners to extend FileMaker deployments with modern streaming and automation capabilities.",
  },
  {
    question: "Do I need to modify my existing FileMaker solutions?",
    answer:
      "Most solutions require minimal changes. Define which layouts and scripts participate in MPC, then configure webhooks and topics within FileMaker Server.",
  },
  {
    question: "How does the MPC server affect performance?",
    answer:
      "The server is optimized for high throughput event handling. Queues, caching, and backpressure keep FileMaker Server responsive, even when many clients subscribe.",
  },
  {
    question: "Can I self-host the MPC server?",
    answer:
      "Yes. Deploy on Docker, Linux, or Windows. Managed hosting is also available if you prefer a turnkey experience.",
  },
];

const setupSteps = [
  "Provision the MPC server using Docker Compose or your preferred infrastructure tooling.",
  "Configure FileMaker Server webhooks and custom scripts to publish events to the MPC endpoints.",
  "Map FileMaker tables, layouts, or scripts to MPC topics and configure access policies.",
  "Install MPC client libraries or WebSocket connectors in your applications.",
  "Monitor health dashboards and configure alerts for throughput, latency, and failures.",
];

const environments = ["Docker", "Linux", "Windows", "Managed hosting"];

const codeSample = `import { MPCClient } from "@filemaker-mpc/client";

const client = new MPCClient({
  endpoint: "https://mpc.yourdomain.com",
  apiKey: process.env.MPC_KEY,
});

client.subscribe("orders/updates", (event) => {
  console.log("FileMaker order change", event.payload);
  // Trigger automation, analytics, or AI workflows here
});

client.publish("orders/create", {
  data: newOrderPayload,
  metadata: { source: "web-portal" },
});`;

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="bg-light">
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
                FileMaker Modernization
              </span>
              <h1 className="display-4 fw-bold">
                FileMaker MPC Server for high-performance, event-driven experiences
              </h1>
              <p className="lead mb-4">
                Stream, synchronize, and scale FileMaker data across teams, devices, and
                automations. MPC delivers real-time collaboration, monitoring, and
                integration hooks without disrupting your existing solutions.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary btn-lg" href="#setup">
                  Get Started
                </a>
                <a className="btn btn-outline-light btn-lg" href="#architecture">
                  See Architecture
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-body-secondary text-dark rounded-4 p-4 shadow-lg">
                <h5 className="text-uppercase text-muted mb-3">Why it matters</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge bg-primary me-3">1</span>
                    <div>
                      <strong>Modern collaboration:</strong> real-time feeds keep
                      distributed teams aligned.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge bg-primary me-3">2</span>
                    <div>
                      <strong>Automation-first:</strong> weave FileMaker into AI and serverless workflows.
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="badge bg-primary me-3">3</span>
                    <div>
                      <strong>Operational control:</strong> observe and govern data flows with ease.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">What is the MPC Server?</h2>
              <p className="fs-5">
                The FileMaker Message Processing Controller (MPC) is a middleware layer
                that brokers real-time communication between FileMaker Server and any
                number of connected applications.
              </p>
              <p className="fs-5">
                MPC taps into FileMaker webhooks, script triggers, and data APIs to
                publish events, receive commands, and orchestrate responses. Developers
                get a unified hub for automations, dashboards, mobile apps, and AI
                assistants.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="p-4 border rounded-4 h-100 bg-white shadow-sm">
                    <h6 className="text-uppercase text-muted">Scalability</h6>
                    <p className="mb-0">
                      Offload heavy workloads to the MPC tier with queues, caching, and
                      workload partitioning.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 border rounded-4 h-100 bg-white shadow-sm">
                    <h6 className="text-uppercase text-muted">Collaboration</h6>
                    <p className="mb-0">
                      Broadcast updates to web, mobile, and desktop clients instantly,
                      with fine-grained subscriptions.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 border rounded-4 h-100 bg-white shadow-sm">
                    <h6 className="text-uppercase text-muted">AI hooks</h6>
                    <p className="mb-0">
                      Trigger intelligent assistants and workflows whenever data changes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 border rounded-4 h-100 bg-white shadow-sm">
                    <h6 className="text-uppercase text-muted">Observability</h6>
                    <p className="mb-0">
                      Log, trace, and audit every interaction for compliance-ready
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Architecture &amp; data flow</h2>
              <p className="fs-5">
                MPC sits between your FileMaker databases and the outside world. Clients
                connect via WebSockets or HTTP APIs, while FileMaker communicates using
                webhooks, custom scripts, and scheduled jobs.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent px-0">
                  <strong>Event capture:</strong> FileMaker publishes structured payloads to MPC topics.
                </li>
                <li className="list-group-item bg-transparent px-0">
                  <strong>Processing:</strong> MPC normalizes, enriches, and routes events to connected consumers.
                </li>
                <li className="list-group-item bg-transparent px-0">
                  <strong>Monitoring:</strong> Dashboards track throughput, latency, and error recovery.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-white border rounded-4 shadow-sm">
                <h6 className="text-uppercase text-muted">Topology overview</h6>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 py-4">
                  <div className="text-center">
                    <div className="rounded-circle border border-primary border-3 px-4 py-3 fw-semibold">
                      Client Apps
                    </div>
                    <small className="text-muted">
                      Web, mobile, analytics, AI
                    </small>
                  </div>
                  <div className="display-6">&rarr;</div>
                  <div className="text-center">
                    <div className="rounded-circle border border-dark border-3 px-4 py-3 fw-semibold bg-body-secondary">
                      MPC Server
                    </div>
                    <small className="text-muted">Queues, APIs, automation</small>
                  </div>
                  <div className="display-6">&rarr;</div>
                  <div className="text-center">
                    <div className="rounded-circle border border-success border-3 px-4 py-3 fw-semibold">
                      FileMaker
                    </div>
                    <small className="text-muted">Layouts, scripts, data</small>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  Bi-directional channels let FileMaker respond to client commands and
                  push changes in real time, while MPC ensures reliability and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Features &amp; benefits</h2>
          <div className="row g-4">
            {features.map((feature) => (
              <div className="col-lg-3 col-sm-6" key={feature.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="setup" className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">Setup &amp; installation guide</h2>
              <ol className="list-group list-group-numbered">
                {setupSteps.map((step, index) => (
                  <li className="list-group-item" key={index}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-5">
              <div className="p-4 bg-white border rounded-4 shadow-sm">
                <h6 className="text-uppercase text-muted mb-3">Supported environments</h6>
                <ul className="list-unstyled mb-4">
                  {environments.map((environment) => (
                    <li key={environment} className="d-flex align-items-center mb-2">
                      <span className="badge bg-success-subtle text-success-emphasis me-3">&check;</span>
                      <span className="fw-semibold">{environment}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-outline-primary w-100">
                  View full documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integration" className="py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Integrating MPC with FileMaker</h2>
              <p className="fs-5">
                Developers extend FileMaker by pointing layouts, scripts, or schedules at
                MPC endpoints. MPC normalizes inbound data, invokes FileMaker scripts via
                Data API, and streams results back to clients instantly.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0 bg-transparent">
                  <strong>Sync:</strong> keep customer portals, mobile apps, and dashboards up-to-date.
                </li>
                <li className="list-group-item px-0 bg-transparent">
                  <strong>Triggers:</strong> launch server scripts or automations from external events.
                </li>
                <li className="list-group-item px-0 bg-transparent">
                  <strong>Analytics:</strong> feed data warehouses or BI tools without load on FileMaker.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="p-4 border rounded-4 bg-white shadow-sm">
                <h6 className="text-uppercase text-muted mb-3">Sample code</h6>
                <pre className="bg-dark text-white rounded-4 p-3 overflow-auto">
                  <code>{codeSample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Demo &amp; proof of concept</h2>
              <p className="fs-5">
                Explore how MPC keeps a FileMaker-powered fulfillment system in sync.
                The live demo shows real-time order creation, status updates, and AI-generated
                summaries triggered by workflow events.
              </p>
              <p className="text-muted mb-0">
                Want a tailored walkthrough? Request a guided session and we will deploy
                a sandbox MPC node connected to your FileMaker environment.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm bg-dark d-flex align-items-center justify-content-center text-white">
                <div className="text-center px-4">
                  <h5 className="fw-semibold">Demo video placeholder</h5>
                  <p className="mb-0 small">
                    Embed your proof-of-concept video or interactive dashboard here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Frequently asked questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((item, index) => {
              const headingId = `heading-${index}`;
              const collapseId = `collapse-${index}`;
              return (
                <div className="accordion-item" key={item.question}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded={index === 0}
                      aria-controls={collapseId}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Ready to modernize your FileMaker stack?</h2>
              <p className="lead">
                Request a consultation, access the deployment guide, or schedule a live
                architecture review. Our team will help tailor MPC to your workflows.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">&#10003; Deployment best practices</li>
                <li className="mb-2">&#10003; Integration blueprints</li>
                <li>&#10003; Performance and security validation</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-dark p-4 rounded-4 shadow-lg">
                <h5 className="fw-semibold mb-3">Request access</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Ada Lovelace" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Work email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="organization" className="form-label">
                      Organization
                    </label>
                    <input type="text" className="form-control" id="organization" placeholder="Company or team" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="goals" className="form-label">
                      Goals &amp; timeline
                    </label>
                    <textarea className="form-control" id="goals" rows="3" placeholder="Share your use case" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Request consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
