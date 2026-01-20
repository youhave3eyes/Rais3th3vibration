import { motion } from 'framer-motion';
import { useState } from 'react';

const XPHealthFoodSection = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);

  const superfoods = [
    {
      id: 'spirulina',
      name: 'Blue-Green Algae',
      filename: 'spirulina.exe',
      icon: '🌊',
      size: '528 KB',
      frequency: '528 Hz',
      benefits: ['Detoxification', 'Brain function', 'Energy boost', 'Immune support'],
      description: 'Ancient superfood from pristine waters. Contains all essential amino acids.',
      nutritionFacts: {
        protein: '60g per 100g',
        vitamins: 'B12, K, A, E',
        minerals: 'Iron, Magnesium, Zinc',
        special: 'Phycocyanin (blue pigment with antioxidant properties)'
      }
    },
    {
      id: 'cacao',
      name: 'Raw Cacao',
      filename: 'cacao.dll',
      icon: '🍫',
      size: '432 KB',
      frequency: '432 Hz',
      benefits: ['Mood elevation', 'Heart opening', 'Antioxidants', 'Bliss molecules'],
      description: 'The food of the gods. Contains anandamide - the bliss molecule.',
      nutritionFacts: {
        protein: '20g per 100g',
        vitamins: 'Magnesium, Iron, Zinc',
        minerals: 'Copper, Manganese, Potassium',
        special: 'Theobromine & Anandamide for natural euphoria'
      }
    },
    {
      id: 'mushrooms',
      name: 'Medicinal Mushrooms',
      filename: 'fungi.sys',
      icon: '🍄',
      size: '741 KB',
      frequency: '741 Hz',
      benefits: ['Immunity boost', 'Consciousness expansion', 'Longevity', 'Stress adaptation'],
      description: 'Reishi, Lion\'s Mane, Chaga - Nature\'s pharmacy for mind and body.',
      nutritionFacts: {
        protein: 'Variable by species',
        vitamins: 'B-complex, D2',
        minerals: 'Potassium, Copper, Selenium',
        special: 'Beta-glucans for immune system modulation'
      }
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Root',
      filename: 'adaptogen.bat',
      icon: '🌿',
      size: '639 KB',
      frequency: '639 Hz',
      benefits: ['Stress relief', 'Vitality increase', 'Hormone balance', 'Sleep quality'],
      description: 'Powerful adaptogenic herb for modern stress warriors.',
      nutritionFacts: {
        protein: '4g per 100g',
        vitamins: 'Iron, Calcium',
        minerals: 'Phosphorus, Zinc',
        special: 'Withanolides - bioactive stress-fighting compounds'
      }
    },
    {
      id: 'bee_products',
      name: 'Bee Superfoods',
      filename: 'honeybee.zip',
      icon: '🐝',
      size: '963 KB',
      frequency: '963 Hz',
      benefits: ['Energy boost', 'Immunity', 'Longevity', 'Skin health'],
      description: 'Raw honey, royal jelly, bee pollen - Sacred nectar from nature.',
      nutritionFacts: {
        protein: '22g per 100g (pollen)',
        vitamins: 'Complete B-complex, C, E',
        minerals: 'All essential minerals',
        special: 'Enzymes, probiotics, and royal jelly proteins'
      }
    },
    {
      id: 'hemp',
      name: 'Hemp Hearts',
      filename: 'cannabis.cfg',
      icon: '🌱',
      size: '528 KB',
      frequency: '528 Hz',
      benefits: ['Complete protein', 'Omega 3-6-9', 'Brain food', 'Anti-inflammatory'],
      description: 'Perfect fatty acid ratio for optimal health and consciousness.',
      nutritionFacts: {
        protein: '31g per 100g',
        vitamins: 'E, B1, B2, B6',
        minerals: 'Magnesium, Iron, Zinc',
        special: 'Perfect 3:1 ratio of Omega-6 to Omega-3'
      }
    }
  ];

  const nutritionPrinciples = [
    { icon: '🌈', title: 'Eat the Rainbow', tip: 'Each color resonates with different chakras' },
    { icon: '🔥', title: 'Living Foods', tip: 'Raw foods contain more life force energy' },
    { icon: '💧', title: 'Structured Water', tip: 'Hexagonal water hydrates 6x better' },
    { icon: '⏰', title: 'Circadian Eating', tip: 'Align meals with natural rhythms' }
  ];

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setShowNutritionFacts(true);
  };

  return (
    <section style={{ padding: '2rem 1rem', paddingBottom: '60px' }}>
      <div className="xp-window" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="xp-window-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🥗</span>
            <span>Sacred_Nutrition_Database.exe - [High Vibrational Foods]</span>
          </div>
          <div className="xp-window-controls">
            <button className="xp-control-btn">_</button>
            <button className="xp-control-btn">□</button>
            <button className="xp-control-btn close">✕</button>
          </div>
        </div>

        <div className="xp-window-content">
          {/* Menu Bar */}
          <div style={{ 
            background: '#f0f0f0',
            border: '1px solid #c0c0c0',
            padding: '0.25rem',
            marginBottom: '1rem',
            display: 'flex',
            gap: '1rem',
            fontSize: '11px'
          }}>
            <span style={{ cursor: 'pointer', padding: '0.25rem 0.5rem' }}>File</span>
            <span style={{ cursor: 'pointer', padding: '0.25rem 0.5rem' }}>Edit</span>
            <span style={{ cursor: 'pointer', padding: '0.25rem 0.5rem' }}>View</span>
            <span style={{ cursor: 'pointer', padding: '0.25rem 0.5rem' }}>Tools</span>
            <span style={{ cursor: 'pointer', padding: '0.25rem 0.5rem' }}>Help</span>
          </div>

          {/* Superfood Database */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '14px' }}>
              📊 High-Vibration Superfood Database
            </h3>
            
            {/* File Explorer Style */}
            <div style={{ 
              border: '2px inset #f0f0f0',
              background: '#ffffff',
              minHeight: '300px'
            }}>
              {/* Headers */}
              <div style={{ 
                background: '#c0c0c0',
                border: '1px outset #c0c0c0',
                display: 'grid',
                gridTemplateColumns: '40px 1fr 100px 80px',
                gap: '1px',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '0.25rem 0.5rem'
              }}>
                <div>Icon</div>
                <div>Name</div>
                <div>Size</div>
                <div>Frequency</div>
              </div>
              
              {/* Food Items */}
              {superfoods.map((food, index) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr 100px 80px',
                    gap: '1px',
                    padding: '0.5rem',
                    borderBottom: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    fontSize: '11px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#316ac5';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onClick={() => handleFoodClick(food)}
                >
                  <div style={{ fontSize: '24px', textAlign: 'center' }}>{food.icon}</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{food.filename}</div>
                    <div style={{ opacity: 0.8, fontSize: '10px' }}>{food.description}</div>
                  </div>
                  <div>{food.size}</div>
                  <div style={{ fontWeight: 'bold', color: '#d13438' }}>{food.frequency}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nutrition Principles */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '14px' }}>
              🎯 Conscious Eating Principles
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem'
            }}>
              {nutritionPrinciples.map((principle, index) => (
                <div
                  key={index}
                  style={{
                    border: '2px outset #f0f0f0',
                    background: '#ffffff',
                    padding: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>
                    {principle.icon}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {principle.title}
                  </div>
                  <div style={{ fontSize: '10px', opacity: 0.8 }}>
                    {principle.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="xp-status-bar">
            <div className="xp-status-item">{superfoods.length} superfood files</div>
            <div className="xp-status-item">Database loaded</div>
            <div className="xp-status-item">Vibration: HIGH</div>
          </div>
        </div>
      </div>

      {/* Nutrition Facts Dialog */}
      {showNutritionFacts && selectedFood && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="xp-dialog"
          style={{ width: '500px' }}
        >
          <div className="xp-dialog-title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{selectedFood.icon}</span>
              <span>{selectedFood.filename} - Properties</span>
            </div>
            <button 
              className="xp-control-btn close"
              onClick={() => setShowNutritionFacts(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="xp-dialog-content" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '48px' }}>{selectedFood.icon}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{selectedFood.name}</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{selectedFood.filename}</div>
                <div style={{ fontSize: '11px' }}>Size: {selectedFood.size}</div>
                <div style={{ fontSize: '11px', color: '#d13438', fontWeight: 'bold' }}>
                  Frequency: {selectedFood.frequency}
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Description:
              </div>
              <div style={{ fontSize: '11px', marginBottom: '1rem' }}>
                {selectedFood.description}
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Health Benefits:
              </div>
              <ul style={{ fontSize: '11px', paddingLeft: '1rem', margin: 0 }}>
                {selectedFood.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Nutrition Facts:
              </div>
              <div style={{ 
                border: '2px inset #f0f0f0', 
                background: '#f8f8f8',
                padding: '0.5rem',
                fontSize: '11px'
              }}>
                <div><strong>Protein:</strong> {selectedFood.nutritionFacts.protein}</div>
                <div><strong>Vitamins:</strong> {selectedFood.nutritionFacts.vitamins}</div>
                <div><strong>Minerals:</strong> {selectedFood.nutritionFacts.minerals}</div>
                <div><strong>Special:</strong> {selectedFood.nutritionFacts.special}</div>
              </div>
            </div>
          </div>
          
          <div className="xp-dialog-buttons">
            <button className="xp-button primary">Add to Cart</button>
            <button className="xp-button">More Info</button>
            <button className="xp-button" onClick={() => setShowNutritionFacts(false)}>
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Dialog Overlay */}
      {showNutritionFacts && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          }}
          onClick={() => setShowNutritionFacts(false)}
        />
      )}
    </section>
  );
};

export default XPHealthFoodSection;