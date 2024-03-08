import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏀 Dive into the Heart of NBA Trivia Madness! 🏀</h1>
      <p style={styles.description}>Get ready to dribble through the ultimate hoops showdown! Test your NBA knowledge with our lightning-fast trivia challenges. From buzzer-beaters to iconic teams, dive into the heart of basketball history and compete for glory on our leaderboard. Think you have what it takes to beat the buzzer? Let the games begin!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default About;
