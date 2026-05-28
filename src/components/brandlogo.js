import React from 'react';

const Brandlogo = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '100px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          padding: '20px 0',
          gap: '30px'
        }}>
          {[1, 2, 3, 4, 5].map((logoNum) => (
            <div key={logoNum} style={{
              flex: '0 0 auto'
            }}>
              <img 
                src={`assets/img/brand-logo/barnd-logo-${logoNum}.png`} 
                alt={`brand logo ${logoNum}`}
                style={{
                  maxWidth: '150px',
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogo;