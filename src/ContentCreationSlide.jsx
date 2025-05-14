import React, { useState, useEffect } from 'react';
import './ContentCreationSlide.css';

const ContentCreationSlide = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  
  // Auto-advance process steps every 5 seconds
  useEffect(() => {
    if (activeTab === 0) {
      const interval = setInterval(() => {
        setAnimateIn(false);
        setTimeout(() => {
          setActiveStep((prev) => (prev + 1) % processSteps.length);
          setAnimateIn(true);
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
      details: [
        "Research high-CPM niches (finance, tech, health)",
        "Find balance between passion and profitability",
        "Analyze competition using TubeBuddy or VidIQ",
        "Look for topics with high search, low competition"
      ],
      icon: "🎯"
    },
    { 
      title: "Content Research", 
      details: [
        "Find trending topics on Reddit, Quora, Google Trends",
        "Use Keywords Everywhere for search volume data",
        "Study top-performing videos in your niche",
        "Collect public domain & Creative Commons resources"
      ],
      icon: "🔍"
    },
    { 
      title: "Script Generation", 
      details: [
        "Use AI tools (Claude, ChatGPT) with specific prompts",
        "Structure: hook, intro, content, CTA",
        "Optimize for engagement (questions, teasers)",
        "Keep script optimized for TTS (avoid complex words)"
      ],
      icon: "✍️"
    },
    { 
      title: "AI Voice Generation", 
      details: [
        "Select natural-sounding AI voice (ElevenLabs, Play.ht)",
        "Add emotion markers in script for emphasis",
        "Adjust pacing and tone to match content style",
        "Export as high-quality MP3 (44.1kHz, 320kbps)"
      ],
      icon: "🎙️"
    },
    { 
      title: "Visual Creation", 
      details: [
        "Source stock footage (Pexels, Envato Elements)",
        "Create custom graphics with Canva, DALL-E, Midjourney",
        "Design text animations for key points (CapCut templates)",
        "Maintain consistent visual style across videos"
      ],
      icon: "🎬"
    },
    { 
      title: "Automated Editing", 
      details: [
        "Use InVideo, CapCut, or Pictory for automated assembly",
        "Apply captions/subtitles for better engagement",
        "Add background music (YouTube Audio Library)",
        "Create reusable templates for faster production"
      ],
      icon: "✂️"
    },
    { 
      title: "Publish & Monetize", 
      details: [
        "Create eye-catching thumbnails (CTR > 4%)",
        "Optimize titles, descriptions with SEO keywords",
        "Schedule uploads consistently (2-3x weekly)",
        "Diversify income: AdSense, affiliates, sponsors, courses"
      ],
      icon: "💰"
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
            <div className="step-nav">
              {processSteps.map((step, idx) => (
                <button 
                  key={idx} 
                  onClick={() => {
                    setAnimateIn(false);
                    setTimeout(() => {
                      setActiveStep(idx);
                      setAnimateIn(true);
                    }, 300);
                  }}
                  className={`step-button ${activeStep === idx ? 'active' : ''}`}
                >
                  {step.icon}
                </button>
              ))}
            </div>
            
            <div className={`step-content ${animateIn ? 'animate-fadeIn' : 'opacity-0 -translate-y-4'}`}>
              <div className="step-header">
                <div className="step-icon">{processSteps[activeStep].icon}</div>
                <h3 className="step-title">
                  Step {activeStep + 1}: {processSteps[activeStep].title}
                </h3>
              </div>
              
              <ul className="step-list">
                {processSteps[activeStep].details.map((detail, i) => (
                  <li key={i} className="step-item animate-slideIn" style={{animationDelay: `${i * 0.1}s`}}>
                    <span className="step-bullet">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center mt-4">
                <div className="flex space-x-1">
                  {processSteps.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300
                              ${activeStep === idx ? 'bg-blue-500 w-4' : 'bg-gray-600'}`}
                      onClick={() => {
                        setAnimateIn(false);
                        setTimeout(() => {
                          setActiveStep(idx);
                          setAnimateIn(true);
                        }, 300);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 1: // Tools
        return (
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="tool-card animate-fadeIn"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="tool-content">
                  <div className="tool-icon">{tool.icon}</div>
                  <div>
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-purpose">{tool.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 2: // Platforms
        return (
          <div className="platform-list">
            {platforms.map((platform, idx) => (
              <div 
                key={idx} 
                className="platform-card animate-slideInRight"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="platform-content">
                  <div className="platform-icon">{platform.icon}</div>
                  <div>
                    <h3 className="platform-name">{platform.name}</h3>
                    <p className="platform-formats">
                      <span className="highlight">Popular formats: </span>
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
            <div className="monetization-grid">
              {monetization.map((item, idx) => (
                <div 
                  key={idx} 
                  className="monetization-card animate-fadeIn"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="monetization-header">
                    <div className="monetization-icon">{item.icon}</div>
                    <h3 className="monetization-platform">{item.platform}</h3>
                  </div>
                  <p className="monetization-requirements">
                    <span className="highlight">Requirements: </span>
                    {item.requirements}
                  </p>
                  <p className="monetization-earnings">
                    <span className="earnings-highlight">Earnings: </span>
                    {item.earnings}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="alt-monetization-section animate-slideInUp">
              <h3 className="alt-monetization-title">Alternative Monetization Strategies</h3>
              <div className="alt-monetization-grid">
                {altMonetization.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="alt-monetization-card"
                  >
                    <div className="alt-monetization-icon">{item.icon}</div>
                    <p className="alt-monetization-method">{item.method}</p>
                    <p className="alt-monetization-details">{item.details}</p>
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
    <div className="slide-container">
      <div className="slide-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h1 className="slide-title">
            FACELESS CONTENT CREATION
          </h1>
          <p className="slide-subtitle">Building an Automated Content Empire Across Multiple Platforms</p>
        </div>
        
        <div className="content-definition">
          <h2 className="definition-title">What is Content Creation?</h2>
          <p className="definition-text">
            Content creation is the process of generating topic ideas, producing engaging material in various formats (video, text, audio, graphics), 
            and making it accessible to your online audience to attract and engage a specific target market.
          </p>
        </div>
        
        <div className="tab-nav">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              className={`tab-button ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ContentCreationSlide;