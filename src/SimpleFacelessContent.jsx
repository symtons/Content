import React, { useState } from 'react';

// CSS styles directly in the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1a1a1a',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#3a86ff'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#cccccc',
    fontStyle: 'italic'
  },
  section: {
    backgroundColor: '#2a2a2a',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    borderBottom: '1px solid #444',
    paddingBottom: '8px'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #444',
    marginBottom: '20px'
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#cccccc',
    fontSize: '1rem'
  },
  activeTab: {
    borderBottom: '3px solid #3a86ff',
    color: 'white',
    fontWeight: 'bold'
  },
  stepNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px'
  },
  stepButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    color: 'white',
    cursor: 'pointer'
  },
  activeStepButton: {
    backgroundColor: '#3a86ff',
    border: 'none'
  },
  stepContent: {
    backgroundColor: '#2a2a2a',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  stepIcon: {
    fontSize: '1.5rem',
    marginRight: '10px',
    backgroundColor: '#3a86ff',
    padding: '8px',
    borderRadius: '50%'
  },
  stepDetails: {
    marginLeft: '30px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px'
  },
  card: {
    backgroundColor: '#2a2a2a',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #444'
  },
  platformItem: {
    marginBottom: '15px'
  },
  highlight: {
    color: '#3a86ff'
  }
};

const SimpleFacelessContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  
  const tabs = ["Process", "Tools", "Platforms", "Monetization"];
  
  const processSteps = [
    { 
      title: "Niche Selection", 
      icon: "🎯",
      details: [
        "Research high-CPM niches (finance, tech, health)",
        "Find balance between passion and profitability",
        "Analyze competition using TubeBuddy or VidIQ",
        "Look for topics with high search, low competition"
      ]
    },
    { 
      title: "Content Research", 
      icon: "🔍",
      details: [
        "Find trending topics on Reddit, Quora, Google Trends",
        "Use Keywords Everywhere for search volume data",
        "Study top-performing videos in your niche",
        "Collect public domain & Creative Commons resources"
      ]
    },
    { 
      title: "Script Generation", 
      icon: "✍️",
      details: [
        "Use AI tools (Claude, ChatGPT) with specific prompts",
        "Structure: hook, intro, content, CTA",
        "Optimize for engagement (questions, teasers)",
        "Keep script optimized for TTS (avoid complex words)"
      ]
    },
    { 
      title: "AI Voice Generation", 
      icon: "🎙️",
      details: [
        "Select natural-sounding AI voice (ElevenLabs, Play.ht)",
        "Add emotion markers in script for emphasis",
        "Adjust pacing and tone to match content style",
        "Export as high-quality MP3 (44.1kHz, 320kbps)"
      ]
    },
    { 
      title: "Visual Creation", 
      icon: "🎬",
      details: [
        "Source stock footage (Pexels, Envato Elements)",
        "Create custom graphics with Canva, DALL-E, Midjourney",
        "Design text animations for key points (CapCut templates)",
        "Maintain consistent visual style across videos"
      ]
    },
    { 
      title: "Automated Editing", 
      icon: "✂️",
      details: [
        "Use InVideo, CapCut, or Pictory for automated assembly",
        "Apply captions/subtitles for better engagement",
        "Add background music (YouTube Audio Library)",
        "Create reusable templates for faster production"
      ]
    },
    { 
      title: "Publish & Monetize", 
      icon: "💰",
      details: [
        "Create eye-catching thumbnails (CTR > 4%)",
        "Optimize titles, descriptions with SEO keywords",
        "Schedule uploads consistently (2-3x weekly)",
        "Diversify income: AdSense, affiliates, sponsors, courses"
      ]
    }
  ];
  
  const tools = [
    { name: "ChatGPT / Claude", purpose: "Script Writing", icon: "📝" },
    { name: "ElevenLabs", purpose: "Voice Synthesis", icon: "🔊" },
    { name: "CapCut", purpose: "Video Editing", icon: "🎬" },
    { name: "Midjourney", purpose: "Image Creation", icon: "🖼️" },
    { name: "Canva", purpose: "Thumbnails", icon: "🎨" },
    { name: "TubeBuddy", purpose: "SEO & Analytics", icon: "📊" }
  ];
  
  const platforms = [
    { 
      name: "YouTube", 
      formats: "Reddit stories, educational explainers, list videos",
      icon: "📺"
    },
    { 
      name: "Facebook", 
      formats: "Short viral clips, quote videos, niche page content",
      icon: "👥"
    },
    { 
      name: "Instagram", 
      formats: "Reels, quotes, facts, niche infographics",
      icon: "📷"
    },
    { 
      name: "TikTok", 
      formats: "Voiceover trends, facts, motivational clips",
      icon: "🎵"
    }
  ];
  
  const monetization = [
    { 
      platform: "YouTube", 
      requirements: "1,000+ subscribers, 4,000+ watch hours",
      earnings: "$2-$5 per 1,000 views (higher in finance/tech niches)",
      icon: "📺"
    },
    { 
      platform: "Facebook", 
      requirements: "10,000+ followers, 600,000+ total video views",
      earnings: "$1-$3 per 1,000 views (varies by region)",
      icon: "👥"
    },
    { 
      platform: "Instagram", 
      requirements: "10,000+ followers, 600 hours watch time",
      earnings: "$0.5-$2 per 1,000 views (higher with brand deals)",
      icon: "📷"
    },
    { 
      platform: "TikTok", 
      requirements: "1,000+ followers, 100,000+ views in 30 days",
      earnings: "$0.02-$0.04 per 1,000 views (Creator Fund)",
      icon: "🎵"
    }
  ];
  
  const altMonetization = [
    { method: "Affiliate Marketing", details: "5-30% commission", icon: "🔗" },
    { method: "Digital Products", details: "100% profit margin", icon: "💻" },
    { method: "Sponsorships", details: "$10-100 per 1K followers", icon: "🤝" }
  ];
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 0: // Process
        return (
          <div>
            <div style={styles.stepNav}>
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  style={idx === activeStep ? {...styles.stepButton, ...styles.activeStepButton} : styles.stepButton}
                  onClick={() => setActiveStep(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div style={styles.stepContent}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>{processSteps[activeStep].icon}</div>
                <h3 style={styles.stepTitle}>
                  Step {activeStep + 1}: {processSteps[activeStep].title}
                </h3>
              </div>
              <ul style={styles.stepDetails}>
                {processSteps[activeStep].details.map((detail, i) => (
                  <li key={i} style={{marginBottom: '10px'}}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 1: // Tools
        return (
          <div style={styles.gridContainer}>
            {tools.map((tool, idx) => (
              <div key={idx} style={styles.card}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                  <span style={{fontSize: '2rem', marginRight: '10px'}}>{tool.icon}</span>
                  <div>
                    <h3 style={{marginBottom: '5px'}}>{tool.name}</h3>
                    <p style={{color: '#3a86ff', fontSize: '0.9rem'}}>{tool.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 2: // Platforms
        return (
          <div>
            {platforms.map((platform, idx) => (
              <div key={idx} style={{...styles.card, ...styles.platformItem}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{fontSize: '2rem', marginRight: '15px'}}>{platform.icon}</span>
                  <div>
                    <h3 style={{marginBottom: '5px'}}>{platform.name}</h3>
                    <p>
                      <span style={styles.highlight}>Popular formats: </span>
                      {platform.formats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 3: // Monetization
        return (
          <div>
            <div style={styles.gridContainer}>
              {monetization.map((item, idx) => (
                <div key={idx} style={styles.card}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <span style={{fontSize: '1.5rem', marginRight: '10px'}}>{item.icon}</span>
                    <h3>{item.platform}</h3>
                  </div>
                  <p style={{fontSize: '0.9rem', marginBottom: '8px'}}>
                    <span style={styles.highlight}>Requirements: </span>
                    {item.requirements}
                  </p>
                  <p style={{fontSize: '0.9rem'}}>
                    <span style={{color: '#4ade80'}}>Earnings: </span>
                    {item.earnings}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{...styles.section, marginTop: '20px'}}>
              <h3 style={{textAlign: 'center', marginBottom: '15px'}}>Alternative Monetization Strategies</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                {altMonetization.map((item, idx) => (
                  <div key={idx} style={{...styles.card, textAlign: 'center'}}>
                    <div style={{fontSize: '2rem', marginBottom: '5px'}}>{item.icon}</div>
                    <h4 style={{marginBottom: '5px'}}>{item.method}</h4>
                    <p style={{color: '#4ade80', fontSize: '0.9rem'}}>{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>FACELESS CONTENT CREATION</h1>
        <p style={styles.subtitle}>Building an Automated Content Empire Across Multiple Platforms</p>
      </div>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What is Content Creation?</h2>
        <p>
          Content creation is the process of generating topic ideas, producing engaging material in various formats (video, text, audio, graphics), 
          and making it accessible to your online audience to attract and engage a specific target market.
        </p>
      </div>
      
      <div style={styles.tabs}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            style={idx === activeTab ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {renderTabContent()}
    </div>
  );
};

export default SimpleFacelessContent;