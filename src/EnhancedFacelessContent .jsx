import React, { useState, useEffect } from 'react';

const EnhancedFacelessContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  
  // Auto-rotate through steps
  useEffect(() => {
    if (activeTab === 0) {
      const interval = setInterval(() => {
        setShowAnimation(false);
        setTimeout(() => {
          setActiveStep((prev) => (prev + 1) % processSteps.length);
          setShowAnimation(true);
        }, 300);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab, activeStep]);
  
  const tabs = [
    "Process", 
    "Tools", 
    "Platforms", 
    "Monetization"
  ];
  
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
  
  // Enhanced styles with transitions
  const styles = {
    container: {
      padding: '25px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden'
    },
    bgCircle1: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(66, 103, 245, 0.1) 0%, rgba(66, 103, 245, 0) 70%)',
      top: '-100px',
      right: '-100px',
      animation: 'pulse 15s infinite'
    },
    bgCircle2: {
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(188, 97, 245, 0.1) 0%, rgba(188, 97, 245, 0) 70%)',
      bottom: '-50px',
      left: '-50px',
      animation: 'pulse 12s infinite 2s'
    },
    content: {
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      position: 'relative'
    },
    title: {
      fontSize: '2.8rem',
      marginBottom: '12px',
      background: 'linear-gradient(to right, #4267f5, #bc61f5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight: 'bold',
      textShadow: '0 2px 10px rgba(255,255,255,0.1)'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#c8c8c8',
      fontStyle: 'italic'
    },
    section: {
      background: 'rgba(26, 30, 46, 0.7)',
      backdropFilter: 'blur(5px)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '25px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    sectionHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: '10px',
      color: '#ffffff'
    },
    tabs: {
      display: 'flex',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      marginBottom: '25px'
    },
    tab: {
      padding: '12px 24px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#a0a0a0',
      fontSize: '1.1rem',
      transition: 'all 0.3s',
      position: 'relative',
      overflow: 'hidden'
    },
    activeTab: {
      color: '#ffffff',
      fontWeight: 'bold'
    },
    tabIndicator: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '3px',
      width: '100%',
      backgroundColor: '#4267f5',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s'
    },
    activeTabIndicator: {
      transform: 'scaleX(1)'
    },
    stepNav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '25px',
      flexWrap: 'wrap'
    },
    stepButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(40, 44, 68, 0.8)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#a0a0a0',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem'
    },
    activeStepButton: {
      backgroundColor: '#4267f5',
      color: 'white',
      border: 'none',
      transform: 'scale(1.1)',
      boxShadow: '0 0 15px rgba(66, 103, 245, 0.5)'
    },
    stepContent: {
      backgroundColor: 'rgba(32, 36, 55, 0.8)',
      padding: '25px',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      transition: 'all 0.4s',
      opacity: 1,
      transform: 'translateY(0)',
      marginBottom: '20px'
    },
    stepContentHidden: {
      opacity: 0,
      transform: 'translateY(-20px)'
    },
    stepHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    stepIcon: {
      fontSize: '1.8rem',
      marginRight: '15px',
      backgroundColor: '#4267f5',
      padding: '12px',
      borderRadius: '50%',
      boxShadow: '0 5px 15px rgba(66, 103, 245, 0.3)',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    stepTitle: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    stepList: {
      listStyle: 'none',
      padding: 0,
      marginLeft: '30px'
    },
    stepItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
      fontSize: '1.1rem',
      color: '#d0d0d0',
      animation: 'fadeIn 0.5s forwards',
      opacity: 0
    },
    stepBullet: {
      color: '#4267f5',
      marginRight: '10px',
      fontSize: '1.2rem'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '20px'
    },
    card: {
      backgroundColor: 'rgba(32, 36, 55, 0.8)',
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'all 0.3s',
      transform: 'translateY(0)',
      opacity: 1
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
      backgroundColor: 'rgba(38, 43, 65, 0.8)'
    },
    toolIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #4267f5, #bc61f5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      marginRight: '15px',
      boxShadow: '0 5px 15px rgba(66, 103, 245, 0.3)'
    },
    toolContent: {
      flex: 1
    },
    toolTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#ffffff'
    },
    toolPurpose: {
      fontSize: '0.9rem',
      color: '#4267f5'
    },
    platformItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'rgba(32, 36, 55, 0.8)',
      borderRadius: '10px',
      marginBottom: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'all 0.3s'
    },
    platformIcon: {
      fontSize: '2.5rem',
      marginRight: '20px',
      backgroundColor: 'rgba(40, 44, 68, 0.8)',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    platformTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#ffffff'
    },
    platformFormats: {
      color: '#d0d0d0'
    },
    highlight: {
      color: '#4267f5',
      fontWeight: 'bold'
    },
    moneyCard: {
      padding: '20px',
      backgroundColor: 'rgba(32, 36, 55, 0.8)',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s',
      display: 'flex',
      flexDirection: 'column'
    },
    moneyHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px'
    },
    moneyIcon: {
      fontSize: '2rem',
      marginRight: '10px'
    },
    moneyTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    moneyRequirements: {
      fontSize: '0.95rem',
      marginBottom: '10px',
      color: '#d0d0d0'
    },
    moneyEarnings: {
      fontSize: '0.95rem',
      color: '#4ade80'
    },
    altMoneySection: {
      padding: '20px',
      backgroundColor: 'rgba(32, 36, 55, 0.8)',
      borderRadius: '10px',
      marginTop: '25px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    altMoneyTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#ffffff'
    },
    altMoneyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px'
    },
    altMoneyCard: {
      padding: '15px',
      backgroundColor: 'rgba(40, 44, 68, 0.8)',
      borderRadius: '10px',
      textAlign: 'center',
      transition: 'all 0.3s',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    altMoneyIcon: {
      fontSize: '2.2rem',
      marginBottom: '10px'
    },
    altMoneyMethod: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#ffffff'
    },
    altMoneyDetails: {
      fontSize: '0.9rem',
      color: '#4ade80'
    },
    keyframesStyle: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulse {
        0% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
        100% { opacity: 0.5; transform: scale(1); }
      }
    `
  };
  
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
                  onClick={() => {
                    setShowAnimation(false);
                    setTimeout(() => {
                      setActiveStep(idx);
                      setShowAnimation(true);
                    }, 300);
                  }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div style={showAnimation ? styles.stepContent : {...styles.stepContent, ...styles.stepContentHidden}}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>{processSteps[activeStep].icon}</div>
                <h3 style={styles.stepTitle}>
                  Step {activeStep + 1}: {processSteps[activeStep].title}
                </h3>
              </div>
              <ul style={styles.stepList}>
                {processSteps[activeStep].details.map((detail, i) => (
                  <li key={i} style={{...styles.stepItem, animationDelay: `${i * 0.1}s`}}>
                    <span style={styles.stepBullet}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 1: // Tools
        return (
          <div style={styles.gridContainer}>
            {tools.map((tool, idx) => {
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div 
                  key={idx} 
                  style={isHovered ? {...styles.card, ...styles.cardHover} : styles.card}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={styles.toolIcon}>{tool.icon}</div>
                    <div style={styles.toolContent}>
                      <h3 style={styles.toolTitle}>{tool.name}</h3>
                      <p style={styles.toolPurpose}>{tool.purpose}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 2: // Platforms
        return (
          <div>
            {platforms.map((platform, idx) => {
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div 
                  key={idx} 
                  style={isHovered ? {...styles.platformItem, transform: 'translateX(10px)', boxShadow: '0 8px 25px rgba(0,0,0,0.3)'} : styles.platformItem}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div style={styles.platformIcon}>{platform.icon}</div>
                  <div>
                    <h3 style={styles.platformTitle}>{platform.name}</h3>
                    <p style={styles.platformFormats}>
                      <span style={styles.highlight}>Popular formats: </span>
                      {platform.formats}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 3: // Monetization
        return (
          <div>
            <div style={styles.gridContainer}>
              {monetization.map((item, idx) => {
                const [isHovered, setIsHovered] = useState(false);
                
                return (
                  <div 
                    key={idx} 
                    style={isHovered ? {...styles.moneyCard, transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)'} : styles.moneyCard}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div style={styles.moneyHeader}>
                      <span style={styles.moneyIcon}>{item.icon}</span>
                      <h3 style={styles.moneyTitle}>{item.platform}</h3>
                    </div>
                    <p style={styles.moneyRequirements}>
                      <span style={styles.highlight}>Requirements: </span>
                      {item.requirements}
                    </p>
                    <p style={styles.moneyEarnings}>
                      <span style={{fontWeight: 'bold', color: '#4ade80'}}>Earnings: </span>
                      {item.earnings}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div style={styles.altMoneySection}>
              <h3 style={styles.altMoneyTitle}>Alternative Monetization Strategies</h3>
              <div style={styles.altMoneyGrid}>
                {altMonetization.map((item, idx) => {
                  const [isHovered, setIsHovered] = useState(false);
                  
                  return (
                    <div 
                      key={idx} 
                      style={isHovered ? {...styles.altMoneyCard, transform: 'translateY(-5px)', backgroundColor: 'rgba(45, 49, 75, 0.8)'} : styles.altMoneyCard}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div style={styles.altMoneyIcon}>{item.icon}</div>
                      <h4 style={styles.altMoneyMethod}>{item.method}</h4>
                      <p style={styles.altMoneyDetails}>{item.details}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div>
      <style>{styles.keyframesStyle}</style>
      <div style={styles.container}>
        {/* Background animated elements */}
        <div style={styles.backgroundElements}>
          <div style={styles.bgCircle1}></div>
          <div style={styles.bgCircle2}></div>
        </div>
        
        <div style={styles.content}>
          <div style={styles.header}>
            <h1 style={styles.title}>FACELESS CONTENT CREATION</h1>
            <p style={styles.subtitle}>Building an Automated Content Empire Across Multiple Platforms</p>
          </div>
          
          <div 
            style={styles.section}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
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
                style={activeTab === idx ? {...styles.tab, ...styles.activeTab} : styles.tab}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
                <div style={activeTab === idx ? {...styles.tabIndicator, ...styles.activeTabIndicator} : styles.tabIndicator}></div>
              </button>
            ))}
          </div>
          
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default EnhancedFacelessContent;