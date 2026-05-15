import { SectionShell } from '@/components/security-trust-figma/section-shell'

const layers = [
  { title: 'Role-Based Access Control (RBAC)', meta: 'Principle of Least Privilege' },
  { title: 'Immutable Audit Logs', meta: 'SHA-256 Hashed Records' },
  { title: 'Enforced MFA', meta: 'Hardware Key Compatible' },
  { title: 'Data Encryption', meta: 'AES-256 at Rest / TLS 1.3 in Transit' },
]

const obligations = [
  {
    n: '01.',
    title: 'Duty of Care',
    body: 'Our systems are engineered to uphold the professional duty of care. Algorithms are regularly audited for bias and error rates by independent legal-tech auditors.',
  },
  {
    n: '02.',
    title: 'Attorney-Client Confidentiality',
    body: 'Client data is logically isolated in single-tenant silos where required. No data is used to train base models without explicit, written consent.',
  },
  {
    n: '03.',
    title: 'Ethical Oversight',
    body: 'Governed by an internal Ethics Board comprising senior partners and data scientists, ensuring alignment with ABA Model Rules of Professional Conduct.',
  },
]

export function EncryptionSection() {
  return (
    <SectionShell tone="deep">
      <h2 className="text-[34px] font-semibold leading-10 tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
        Multi-layered Encryption
      </h2>
      <p className="mt-4 max-w-[900px] text-[17px] font-medium leading-[1.45] text-[#b9c6e0] sm:text-xl sm:leading-[32.5px]">
        Security is applied in depth. From the network edge to the database record, every interaction is
        authenticated, authorized, and encrypted.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map(({ title, meta }) => (
          <div
            key={title}
            className="rounded-[6px] border border-[rgba(39,73,126,0.72)] bg-[#10284d] p-6"
          >
            <h3 className="text-2xl font-semibold leading-8 text-[#f2f6ff]">{title}</h3>
            <p className="mt-2 font-mono text-lg leading-7 text-[#7fb3ff]">{meta}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-[rgba(27,56,104,0.5)] pt-16">
        <h3 className="text-xl font-bold leading-7 text-[#f2f6ff]">PROFESSIONAL OBLIGATIONS</h3>
        <div className="mt-10 flex flex-col gap-12">
          {obligations.map(({ n, title, body }) => (
            <div
              key={n}
              className="grid gap-6 border-b border-[rgba(27,56,104,0.5)] pb-12 last:border-0 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-mono text-xl text-[#9facca]">{n}</span>
              <div>
                <h4 className="text-2xl font-semibold leading-8 text-[#f2f6ff]">{title}</h4>
                <p className="mt-4 max-w-[720px] text-[17px] leading-[1.45] text-[#aebbd4] sm:text-xl sm:leading-[32.5px]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-lg leading-7 text-[#9facca]">Updated: Oct 2023</p>
          <p className="text-lg leading-7 text-[#b9c6e0]">Systems Operational</p>
        </div>
      </div>
    </SectionShell>
  )
}
