interface OgImageProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function generateOgImageJsx({ title, subtitle, badge }: OgImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1e3a5f 100%)',
        padding: '64px',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Logo row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: 'auto',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}
        >
          🔥
        </div>
        <span
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            letterSpacing: '-0.5px',
          }}
        >
          FIRE
          <span style={{ color: '#f97316' }}>map</span>
        </span>
      </div>

      {/* Badge */}
      {badge && (
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              background: 'rgba(249,115,22,0.2)',
              color: '#f97316',
              fontSize: '16px',
              fontWeight: '600',
              padding: '6px 16px',
              borderRadius: '999px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: '1px solid rgba(249,115,22,0.4)',
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Main headline */}
      <div
        style={{
          fontSize: title.length > 30 ? '52px' : '60px',
          fontWeight: '800',
          color: 'white',
          lineHeight: '1.1',
          letterSpacing: '-1px',
          marginBottom: '20px',
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: '24px',
          color: 'rgba(255,255,255,0.65)',
          fontWeight: '400',
          lineHeight: '1.4',
          maxWidth: '800px',
          marginBottom: '48px',
        }}
      >
        {subtitle}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}>
          firemap.app
        </span>
        <span style={{ color: '#f97316', fontSize: '18px', fontWeight: '600' }}>
          Your roadmap to financial independence
        </span>
      </div>
    </div>
  );
}
