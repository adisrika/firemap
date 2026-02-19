import Link from 'next/link';

const rows = [
  {
    aspect: 'Annual Expenses',
    lean: '< $40,000',
    barista: '$40,000–$60,000',
    regular: '$60,000–$100,000',
    fat: '$100,000+',
    coast: 'Any',
  },
  {
    aspect: 'FIRE Number',
    lean: '< $1M',
    barista: '$1M–$1.5M',
    regular: '$1.5M–$2.5M',
    fat: '$2.5M+',
    coast: 'Variable',
  },
  {
    aspect: 'Work After FIRE',
    lean: 'None',
    barista: 'Part-time',
    regular: 'None',
    fat: 'None',
    coast: 'Full/Part-time until retirement',
  },
  {
    aspect: 'Time to Achieve',
    lean: '10–15 yrs',
    barista: '12–18 yrs',
    regular: '15–25 yrs',
    fat: '20–35 yrs',
    coast: 'Variable',
  },
  {
    aspect: 'Savings Rate Needed',
    lean: '50%+',
    barista: '40–50%',
    regular: '30–50%',
    fat: '40–60%',
    coast: 'High early, low after',
  },
  {
    aspect: 'Lifestyle Constraints',
    lean: 'High',
    barista: 'Moderate',
    regular: 'Low',
    fat: 'Very Low',
    coast: 'Moderate',
  },
  {
    aspect: 'Market Risk',
    lean: 'High',
    barista: 'Medium',
    regular: 'Medium',
    fat: 'Low',
    coast: 'Low (long horizon)',
  },
];

const headers = [
  { key: 'lean', label: 'Lean FIRE', emoji: '🌱', href: '/learn/lean-fire' },
  { key: 'barista', label: 'Barista FIRE', emoji: '☕', href: '/learn/barista-fire' },
  { key: 'regular', label: 'Regular FIRE', emoji: '🔥', href: '/learn' },
  { key: 'fat', label: 'Fat FIRE', emoji: '💰', href: '/learn/fat-fire' },
  { key: 'coast', label: 'Coast FIRE', emoji: '🏄', href: '/learn/coast-fire' },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-800 text-white">
            <th className="text-left px-4 py-4 font-semibold text-navy-200 w-36 shrink-0">Aspect</th>
            {headers.map((h) => (
              <th key={h.key} className="px-4 py-4 text-center font-semibold">
                <Link href={h.href} className="hover:text-fire-400 transition-colors">
                  <div className="text-lg mb-1">{h.emoji}</div>
                  <div>{h.label}</div>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.aspect}
              className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-4 py-3 font-medium text-navy-700">{row.aspect}</td>
              <td className="px-4 py-3 text-center text-green-700 font-medium">{row.lean}</td>
              <td className="px-4 py-3 text-center text-amber-700 font-medium">{row.barista}</td>
              <td className="px-4 py-3 text-center text-fire-700 font-medium">{row.regular}</td>
              <td className="px-4 py-3 text-center text-orange-700 font-medium">{row.fat}</td>
              <td className="px-4 py-3 text-center text-cyan-700 font-medium">{row.coast}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
