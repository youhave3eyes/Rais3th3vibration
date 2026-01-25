import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MatrixRain from '../components/effects/MatrixRain'
import KnowledgeHero from '../components/knowledge/KnowledgeHero'
import FeaturedContent from '../components/knowledge/FeaturedContent'
import SearchFilter from '../components/knowledge/SearchFilter'
import LearningPaths from '../components/knowledge/LearningPaths'
import VideoLibrary from '../components/knowledge/VideoLibrary'
import KnowledgeGrid from '../components/knowledge/KnowledgeGrid'
import { knowledgePortalTopics } from '../data/knowledgeData'

// Knowledge Portal Topics Component with working links
const KnowledgePortalSection = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
      borderTop: '2px solid rgba(139, 92, 246, 0.3)',
      position: 'relative'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            🔮 Explore All Topics
          </h2>
          <p style={{
            color: '#94A3B8',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {knowledgePortalTopics.length} deep dives into consciousness expansion, hidden knowledge, and spiritual awakening
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {knowledgePortalTopics.map((topic, idx) => (
            <Link key={topic.id} to={topic.path} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: `0 0 25px ${topic.color}40` }}
                style={{
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.84) 0%, rgba(10, 10, 18, 0.84) 100%)',
                  border: `1px solid ${topic.color}55`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{topic.icon}</span>
                  <h3 style={{
                    color: topic.color,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {topic.title}
                  </h3>
                </div>
                <p style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {topic.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    background: `${topic.color}20`,
                    color: topic.color,
                    borderRadius: '4px'
                  }}>
                    {topic.category}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#9CA3AF',
                    borderRadius: '4px'
                  }}>
                    {topic.articles} articles
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const Knowledge = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000000', minHeight: '100vh' }}
    >
      <MatrixRain color="#9D4EDD" glowColor="#C77DFF" />
      <KnowledgeHero />
      <FeaturedContent />
      <SearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LearningPaths />
      <VideoLibrary />
      <KnowledgeGrid 
        searchTerm={searchTerm}
        activeCategory={activeCategory}
      />
      
      {/* Knowledge Portal Topics Section */}
      <KnowledgePortalSection />
    </motion.div>
  )
}

export default Knowledge
