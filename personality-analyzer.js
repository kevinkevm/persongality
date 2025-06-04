// personality-analyzer.js

class PersonalityAnalyzer {
    constructor() {
        this.personalities = {
            'TO': { 
                name: 'The Thoughtful Optimist',
                subtitle: 'You see the good in everything but think deeply about why things happen',
                baseTraits: {
                    social: 'The Emotional Support CEO 👑',
                    emotional: 'The Vibe Detector 🔮', 
                    hidden: 'The Secret Softie 🥺',
                    philosophy: 'The Growth Guru 🌱'
                },
                rarity: '15%'
            },
            'IA': { 
                name: 'The Intuitive Analyst',
                subtitle: 'You notice patterns others miss and connect dots between seemingly unrelated things',
                baseTraits: {
                    social: 'The Strategy Whisperer 🎯',
                    emotional: 'The Pattern Reader 🧩',
                    hidden: 'The Calculated Dreamer 💭',
                    philosophy: 'The Logic Mystic ⚡'
                },
                rarity: '12%'
            },
            'LD': { 
                name: 'The Loyal Dreamer',
                subtitle: 'You remain faithful to people and ideals while imagining better possibilities',
                baseTraits: {
                    social: 'The Ride or Die Friend 🤝',
                    emotional: 'The Deep Feeler 💙',
                    hidden: 'The Fantasy Architect 🏰',
                    philosophy: 'The Heart Compass 💝'
                },
                rarity: '14%'
            },
            'CE': { 
                name: 'The Confident Explorer',
                subtitle: 'You approach new experiences with enthusiasm and quiet self-assurance',
                baseTraits: {
                    social: 'The Adventure Catalyst 🚀',
                    emotional: 'The Experience Processor ⚡',
                    hidden: 'The Quiet Questioner 🤔',
                    philosophy: 'The Life Maximizer 🌍'
                },
                rarity: '11%'
            },
            'GR': { 
                name: 'The Gentle Rebel',
                subtitle: 'You quietly challenge conventions while maintaining a calm, approachable demeanor',
                baseTraits: {
                    social: 'The Assumption Challenger 🤨',
                    emotional: 'The Calm Storm 🌊',
                    hidden: 'The Quiet Revolutionary 🔥',
                    philosophy: 'The Rule Bender 🎭'
                },
                rarity: '9%'
            },
            'AE': { 
                name: 'The Ambitious Empath',
                subtitle: 'You pursue goals relentlessly while remaining attuned to others\' feelings',
                baseTraits: {
                    social: 'The Potential Pusher 💪',
                    emotional: 'The Balance Master ⚖️',
                    hidden: 'The Perfectionist Worrier 😰',
                    philosophy: 'The Success Sharer 🌟'
                },
                rarity: '10%'
            },
            'CR': { 
                name: 'The Creative Realist',
                subtitle: 'You bring innovative ideas to life through careful planning and execution',
                baseTraits: {
                    social: 'The Idea Architect 🏗️',
                    emotional: 'The Creative Expressionist 🎨',
                    hidden: 'The Secret Visionary 👁️',
                    philosophy: 'The Action Dreamer 💫'
                },
                rarity: '13%'
            },
            'PM': { 
                name: 'The Protective Motivator',
                subtitle: 'You safeguard those you care about while inspiring them to grow',
                baseTraits: {
                    social: 'The Crisis Commander 🛡️',
                    emotional: 'The Feelings Helper 🤗',
                    hidden: 'The Worried Warrior 😟',
                    philosophy: 'The Security Builder 🏠'
                },
                rarity: '16%'
            }
        };

        this.traitTemplates = {
            social: {
                option_1: {
                    title: "The Social Butterfly 🦋",
                    description: "You're everyone's therapist but secretly screenshot every nice thing people say about you",
                    rarity: "Only 10% relate to this trait"
                },
                option_2: {
                    title: "The Quiet Connector 🤝",
                    description: "You create the group chat energy that keeps everyone connected",
                    rarity: "Rare trait: Only 9% have this power"
                },
                option_3: {
                    title: "The Empathy Expert 💝",
                    description: "People trust you with their deepest secrets because you actually listen",
                    rarity: "Top 11% most trusted personalities"
                },
                option_4: {
                    title: "The Vibe Curator 🎵",
                    description: "Your music taste has converted at least 5 friends to new genres",
                    rarity: "Only 8% share music this way"
                },
                option_5: {
                    title: "The Silent Supporter 🌟",
                    description: "Your presence alone makes chaotic situations feel manageable",
                    rarity: "Part of the top 12% most calming people"
                },
                option_6: {
                    title: "The Friend Collector 💫",
                    description: "You remember everyone's birthday but forget your own sometimes",
                    rarity: "Only 7% connect this deeply"
                },
                option_7: {
                    title: "The Deep Diver 🌊",
                    description: "You're the friend people call when they need honest advice, not sugar-coating",
                    rarity: "Rare honesty: Only 13% are this real"
                },
                option_8: {
                    title: "The Social Architect 🏗️",
                    description: "You're always the one planning hangouts that actually happen",
                    rarity: "Top 6% most reliable friends"
                },
                option_9: {
                    title: "The Emotional Guardian 🛡️",
                    description: "You notice when someone's off before they even realize it themselves",
                    rarity: "Only 14% have this intuition"
                },
                option_10: {
                    title: "The Quality Keeper 💎",
                    description: "Your small circle trusts you more than their therapist",
                    rarity: "Part of the top 10% most authentic people"
                }
            },
            emotional: {
                option_1: {
                    title: "The Mood Alchemist 🔮",
                    description: "You process emotions through music like other people use therapy",
                    rarity: "Only 9% process feelings this way"
                },
                option_2: {
                    title: "The Vibe Detector 📡",
                    description: "Your playlist is basically a mood ring that everyone can hear",
                    rarity: "Rare talent: Only 11% have this power"
                },
                option_3: {
                    title: "The Emotional Explorer 🗺️",
                    description: "You explore the full spectrum of human emotion through your music",
                    rarity: "Top 8% most emotionally diverse"
                },
                option_4: {
                    title: "The Feeling Finder 🔍",
                    description: "You can find the perfect song for any feeling in under 30 seconds",
                    rarity: "Only 12% match moods this well"
                },
                option_5: {
                    title: "The Depth Diver 🌊",
                    description: "You understand that sadness isn't just one feeling - it has layers",
                    rarity: "Part of the top 7% most emotionally aware"
                },
                option_6: {
                    title: "The Mood Master 🎭",
                    description: "Your emotional processing is consistent - you know what works for you",
                    rarity: "Only 13% are this emotionally stable"
                },
                option_7: {
                    title: "The Soul Soother 🌙",
                    description: "You're the friend with the go-to comfort playlist that actually comforts",
                    rarity: "Rare comfort: Only 10% heal this way"
                },
                option_8: {
                    title: "The Feeling Philosopher 🤔",
                    description: "You find deep meaning in simple melodies that others overlook",
                    rarity: "Top 6% most insightful listeners"
                },
                option_9: {
                    title: "The Emotion Artist 🎨",
                    description: "Your music taste reflects a particular kind of beautiful melancholy",
                    rarity: "Only 15% feel music this deeply"
                },
                option_10: {
                    title: "The Truth Seeker 🔱",
                    description: "You'd rather feel something real than something generic",
                    rarity: "Part of the top 9% most authentic feelers"
                }
            },
            hidden: {
                option_1: {
                    title: "The Secret Softie 🥺",
                    description: "Acts tough but cries during pet adoption commercials",
                    rarity: "Only 11% have this duality"
                },
                option_2: {
                    title: "The Masked Maestro 🎭",
                    description: "Your playlist is 50% hardcore and 50% songs that make you emotional",
                    rarity: "Rare contrast: Only 8% balance this way"
                },
                option_3: {
                    title: "The Quiet Storm ⛈️",
                    description: "You have a reputation for being strong but secretly worry about everyone",
                    rarity: "Top 12% most secretly caring"
                },
                option_4: {
                    title: "The Hidden Poet 📝",
                    description: "Your music reveals sides of you that your daily life doesn't show",
                    rarity: "Only 7% express this way"
                },
                option_5: {
                    title: "The Deep Well 🌊",
                    description: "You have hidden depths that only your closest friends get to see",
                    rarity: "Part of the top 13% most layered souls"
                },
                option_6: {
                    title: "The Secret Keeper 🗝️",
                    description: "People see your confident exterior but miss your overthinking interior",
                    rarity: "Only 10% hide this much depth"
                },
                option_7: {
                    title: "The Mystery Maker 🎪",
                    description: "You're predictable on the surface but full of surprises underneath",
                    rarity: "Rare complexity: Only 9% surprise like this"
                },
                option_8: {
                    title: "The Truth Mirror 🪞",
                    description: "What you see is what you get - your music matches your personality perfectly",
                    rarity: "Top 14% most authentic souls"
                },
                option_9: {
                    title: "The Soul Artist 🎨",
                    description: "You're authentically yourself across all areas of life",
                    rarity: "Only 6% are this genuinely themselves"
                },
                option_10: {
                    title: "The Reality Rebel 🌟",
                    description: "You're refreshingly consistent in a world full of contradictions",
                    rarity: "Part of the top 10% most genuine people"
                }
            },
            philosophy: {
                option_1: {
                    title: "The Growth Guru 🌱",
                    description: "Your camera roll is full of screenshots of inspirational quotes",
                    rarity: "Only 8% inspire this way"
                },
                option_2: {
                    title: "The Soul Seeker 🔮",
                    description: "You find wisdom in quiet moments and gentle melodies",
                    rarity: "Rare wisdom: Only 11% think this deeply"
                },
                option_3: {
                    title: "The Life Artist 🎨",
                    description: "You believe growth happens through connection with others and nature",
                    rarity: "Top 9% most holistic thinkers"
                },
                option_4: {
                    title: "The Mindful Mover 🌊",
                    description: "Your life philosophy centers around mindfulness and presence",
                    rarity: "Only 12% practice presence this way"
                },
                option_5: {
                    title: "The Action Sage ⚡",
                    description: "You believe growth happens through action and experience",
                    rarity: "Part of the top 7% most action-oriented"
                },
                option_6: {
                    title: "The Wisdom Weaver 🕸️",
                    description: "You think the best conversations happen with live music in the background",
                    rarity: "Only 13% connect ideas this way"
                },
                option_7: {
                    title: "The Future Feeler 🔮",
                    description: "Your philosophy is shaped by electronic soundscapes and digital emotions",
                    rarity: "Rare vision: Only 10% think this forward"
                },
                option_8: {
                    title: "The Progress Poet 📝",
                    description: "You believe the future requires new ways of thinking and feeling",
                    rarity: "Top 15% most innovative minds"
                },
                option_9: {
                    title: "The Quiet Revolutionary 🌟",
                    description: "You're drawn to progress that's both innovative and introspective",
                    rarity: "Only 6% balance change this way"
                },
                option_10: {
                    title: "The Balance Keeper ⚖️",
                    description: "You find meaning in the spaces between beats",
                    rarity: "Part of the top 14% most balanced thinkers"
                }
            }
        };

        this.rarityStats = {
            social: {
                "high_energy_high_popularity": "Only 13% relate to this trait",
                "high_energy_low_popularity": "Rare trait: Only 8% have this power", 
                "low_energy_high_popularity": "Top 15% most trusted personalities",
                "low_energy_low_popularity": "Part of the top 20% most authentic people"
            },
            emotional: {
                "high_valence_high_variety": "Only 11% process emotions this way",
                "high_valence_low_variety": "Rare consistency: Only 7% are this stable",
                "low_valence_high_variety": "Top 12% most emotionally complex",
                "low_valence_low_variety": "Only 9% understand depth this way"
            },
            hidden: {
                "high_contrast": "Top 15% most complex personality",
                "medium_contrast": "Only 18% have this level of depth", 
                "low_contrast": "Rare authenticity: Only 6% are this genuine"
            },
            philosophy: {
                "high_acoustic_high_tempo": "Part of the top 20% most inspiring personalities",
                "high_acoustic_low_tempo": "Only 14% find wisdom this way",
                "low_acoustic_high_tempo": "Rare energy: Only 10% motivate like this",
                "low_acoustic_low_tempo": "Top 8% most forward-thinking personalities"
            }
        };
    }

    analyzePersonality(audioFeatures, tracks) {
        // Calculate core metrics
        const metrics = this.calculateMetrics(audioFeatures, tracks);
        
        // Generate traits for each dimension
        const result = {
            social: this.selectSocialOption(metrics),
            emotional: this.selectEmotionalOption(metrics),
            hidden: this.selectHiddenOption(metrics),
            philosophy: this.selectPhilosophyOption(metrics),
            metrics: metrics
        };
        
        return result;
    }

    calculateMetrics(features, tracks) {
        console.log('=== CALCULATING METRICS ===');
        console.log('Input features:', features);
        console.log('Input tracks:', tracks);
        
        let metrics = {
            valenceScore: 0,
            energyScore: 0,
            varietyScore: 0,
            complexityScore: 0,
            acousticnessScore: 0,
            danceabilityScore: 0,
            tempoScore: 0,
            popularityVariance: 0
        };

        if (features && features.length > 0) {
            let totals = {
                energy: 0, valence: 0, acousticness: 0,
                danceability: 0, instrumentalness: 0, tempo: 0
            };
            let count = 0;

            features.forEach(feature => {
                if (feature) {
                    totals.energy += feature.energy;
                    totals.valence += feature.valence;
                    totals.acousticness += feature.acousticness;
                    totals.danceability += feature.danceability;
                    totals.instrumentalness += feature.instrumentalness;
                    totals.tempo += feature.tempo;
                    count++;
                }
            });

            if (count > 0) {
                metrics.valenceScore = (totals.valence / count) * 10;
                metrics.energyScore = (totals.energy / count) * 10;
                metrics.acousticnessScore = (totals.acousticness / count) * 10;
                metrics.danceabilityScore = (totals.danceability / count) * 10;
                metrics.tempoScore = (totals.tempo / count) / 20; // Normalize tempo
                metrics.complexityScore = ((1 - totals.danceability / count) * 5) + ((totals.instrumentalness / count) * 5);
            }
            
            console.log('Calculated audio metrics:', {
                valenceScore: metrics.valenceScore,
                energyScore: metrics.energyScore,
                acousticnessScore: metrics.acousticnessScore,
                complexityScore: metrics.complexityScore
            });
        } else {
            console.log('No audio features available!');
        }

        if (tracks && tracks.length > 0) {
            // Calculate variety
            const artistCount = new Set(tracks.map(track => track.artists[0].id)).size;
            metrics.varietyScore = (artistCount / tracks.length) * 10;
            
            // Calculate popularity variance
            const popularities = tracks.map(track => track.popularity);
            const avgPopularity = popularities.reduce((a, b) => a + b, 0) / popularities.length;
            metrics.popularityVariance = Math.sqrt(
                popularities.map(p => Math.pow(p - avgPopularity, 2))
                           .reduce((a, b) => a + b, 0) / popularities.length
            );
            
            console.log('Calculated track metrics:', {
                varietyScore: metrics.varietyScore,
                popularityVariance: metrics.popularityVariance
            });
        } else {
            console.log('No tracks available!');
        }

        console.log('Final calculated metrics:', metrics);
        console.log('==========================');
        return metrics;
    }

    selectSocialOption(metrics) {
        // Map energy and popularity variance to a 1-10 scale
        const energyComponent = Math.round(metrics.energyScore);
        const popularityComponent = Math.round((metrics.popularityVariance / 30) * 10); // Normalize to 1-10
        
        // Combine components to get an option number (1-10)
        let optionNum = Math.round((energyComponent + popularityComponent) / 2);
        
        // Ensure it's within bounds
        optionNum = Math.max(1, Math.min(10, optionNum));
        
        return {
            ...this.traitTemplates.social[`option_${optionNum}`],
            option: optionNum
        };
    }

    selectEmotionalOption(metrics) {
        // Map valence and variety to a 1-10 scale
        const valenceComponent = Math.round(metrics.valenceScore);
        const varietyComponent = Math.round(metrics.varietyScore);
        
        // Combine components to get an option number (1-10)
        let optionNum = Math.round((valenceComponent + varietyComponent) / 2);
        
        // Ensure it's within bounds
        optionNum = Math.max(1, Math.min(10, optionNum));
        
        return {
            ...this.traitTemplates.emotional[`option_${optionNum}`],
            option: optionNum
        };
    }

    selectHiddenOption(metrics) {
        // Calculate contrast between surface and depth scores
        const surfaceScore = (metrics.energyScore + metrics.valenceScore) / 2;
        const depthScore = (metrics.acousticnessScore + (10 - metrics.danceabilityScore)) / 2;
        const contrast = Math.abs(surfaceScore - depthScore);
        
        // Map contrast to 1-10 scale
        let optionNum = Math.round(contrast * 2); // contrast is typically 0-5, multiply by 2
        
        // Ensure it's within bounds
        optionNum = Math.max(1, Math.min(10, optionNum));
        
        return {
            ...this.traitTemplates.hidden[`option_${optionNum}`],
            option: optionNum
        };
    }

    selectPhilosophyOption(metrics) {
        // Map acousticness and tempo to a 1-10 scale
        const acousticComponent = Math.round(metrics.acousticnessScore);
        const tempoComponent = Math.round(metrics.tempoScore);
        
        // Combine components to get an option number (1-10)
        let optionNum = Math.round((acousticComponent + tempoComponent) / 2);
        
        // Ensure it's within bounds
        optionNum = Math.max(1, Math.min(10, optionNum));
        
        return {
            ...this.traitTemplates.philosophy[`option_${optionNum}`],
            option: optionNum
        };
    }

    getSongExamplesForDimension(tracks, dimension, usedSongs = [], count = 3) {
        if (!tracks || !Array.isArray(tracks)) return [];
        
        let sortedTracks = [...tracks].filter(track => {
            const songKey = `${track.name} by ${track.artists[0].name}`;
            return !usedSongs.includes(songKey);
        });

        switch(dimension) {
            case 'social':
                sortedTracks.sort((a, b) => (b.popularity + ((b.audio_features?.danceability || 0) * 100)) - 
                                           (a.popularity + ((a.audio_features?.danceability || 0) * 100)));
                break;
            case 'emotional':
                sortedTracks.sort((a, b) => (b.audio_features?.valence || 0) - (a.audio_features?.valence || 0));
                break;
            case 'hidden':
                sortedTracks.sort((a, b) => ((b.audio_features?.instrumentalness || 0) - (b.audio_features?.danceability || 0.5)) - 
                                           ((a.audio_features?.instrumentalness || 0) - (a.audio_features?.danceability || 0.5)));
                break;
            case 'philosophy':
                sortedTracks.sort((a, b) => (b.audio_features?.acousticness || 0) - (a.audio_features?.acousticness || 0));
                break;
        }

        const selectedSongs = sortedTracks.slice(0, count).map(track => ({
            song: `${track.name} by ${track.artists[0].name}`,
            track: track
        }));

        return selectedSongs;
    }
}

// Testing functions
function showTesting() {
    document.getElementById('testing').style.display = 'block';
    
    // Update display values when sliders change
    ['energy', 'valence', 'variety', 'acousticness', 'complexity', 'danceability'].forEach(id => {
        const slider = document.getElementById(id);
        const display = document.getElementById(id + 'Val');
        slider.oninput = () => display.textContent = slider.value;
    });
}

function generateTestPersonality() {
    // Debug: Check what the sliders actually contain
    console.log('Raw slider values:');
    console.log('energy slider:', document.getElementById('energy'));
    console.log('energy value:', document.getElementById('energy')?.value);
    console.log('valence value:', document.getElementById('valence')?.value);
    console.log('variety value:', document.getElementById('variety')?.value);
    console.log('acousticness value:', document.getElementById('acousticness')?.value);
    
    const metrics = {
        energyScore: parseFloat(document.getElementById('energy').value),
        valenceScore: parseFloat(document.getElementById('valence').value),
        varietyScore: parseFloat(document.getElementById('variety').value),
        acousticnessScore: parseFloat(document.getElementById('acousticness').value),
        complexityScore: parseFloat(document.getElementById('complexity')?.value || 5),
        danceabilityScore: parseFloat(document.getElementById('danceability')?.value || 5),
        tempoScore: 5,
        popularityVariance: 15
    };
    
    // Debug: Check the final metrics object
    console.log('Final metrics object:', metrics);
    
    // Initialize the global analyzer if it doesn't exist
    if (!window.personalityAnalyzer) {
        window.personalityAnalyzer = new PersonalityAnalyzer();
    }
    
    // Create mock audio features and tracks
    const mockAudioFeatures = [{
        energy: metrics.energyScore / 10,
        valence: metrics.valenceScore / 10,
        acousticness: metrics.acousticnessScore / 10,
        danceability: metrics.danceabilityScore / 10,
        instrumentalness: metrics.complexityScore / 10,
        tempo: metrics.tempoScore * 20
    }];
    
    const mockTracks = [{
        popularity: 50,
        artists: [{ id: 'test' }],
        name: 'Test Track',
        album: { images: [{ url: '' }] }
    }];
    
    // Generate personality analysis with mock data
    const personality = window.personalityAnalyzer.analyzePersonality(mockAudioFeatures, mockTracks);
    
    showTestResult(personality);
    document.getElementById('testing').style.display = 'none';
}

function showTestResult(personality) {
    // Use the same showResult function but with test data
    document.getElementById('landing').style.display = 'none';
    window.currentPersonality = personality;
    
    document.getElementById('result').innerHTML = `
        <div class="result-container" style="position: relative; max-width: 800px; margin: 0 auto; background: rgba(255, 255, 255, 0.98); padding: clamp(15px, 4vw, 40px); border-radius: clamp(20px, 4vw, 30px); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <!-- Title Section -->
            <div class="title-container" style="text-align: center; margin-bottom: 40px;">
                <h1 class="main-title" style="
                    font-size: clamp(2rem, 5vw, 2.5rem);
                    font-weight: 800;
                    background: linear-gradient(45deg, #FF3366, #FF6B3D, #9D50BB);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: -0.5px;
                    position: relative;
                    display: inline-block;
                    padding: 0 10px;
                    text-shadow: 3px 3px 6px rgba(0,0,0,0.1);
                ">YOUR PERSONGALITY</h1>
                <div style="
                    font-size: clamp(1rem, 3vw, 1.2rem);
                    color: #666;
                    font-weight: 400;
                    margin-top: 5px;
                    opacity: 0.9;
                ">Your soul's musical fingerprint ✨</div>
            </div>

            <!-- 4 Dimensions Section -->
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="background: linear-gradient(135deg, #FF6B6B, #FF8E8E); border-radius: 25px; padding: 30px;">
                    <div style="color: white; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">${personality.social.title}</div>
                    <div style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.5;">${personality.social.description}</div>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 15px; color: white;">💫 ${personality.social.rarity}</div>
                </div>
                
                <div style="background: linear-gradient(135deg, #4F9CFF, #6BB5FF); border-radius: 25px; padding: 30px;">
                    <div style="color: white; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">${personality.emotional.title}</div>
                    <div style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.5;">${personality.emotional.description}</div>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 15px; color: white;">✨ ${personality.emotional.rarity}</div>
                </div>
                
                <div style="background: linear-gradient(135deg, #9C4FFF, #B07CFF); border-radius: 25px; padding: 30px;">
                    <div style="color: white; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">${personality.hidden.title}</div>
                    <div style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.5;">${personality.hidden.description}</div>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 15px; color: white;">🎭 ${personality.hidden.rarity}</div>
                </div>
                
                <div style="background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 25px; padding: 30px;">
                    <div style="color: white; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">${personality.philosophy.title}</div>
                    <div style="color: rgba(255,255,255,0.95); font-size: 1.2rem; line-height: 1.5;">${personality.philosophy.description}</div>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 15px; color: white;">🌟 ${personality.philosophy.rarity}</div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="showTesting()" style="background: #666; color: white; padding: 10px 20px; border: none; border-radius: 8px;">Test Different Values</button>
            </div>
        </div>
    `;
    
    document.getElementById('result').style.display = 'block';
}

async function saveImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    // Set background gradient
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
    gradient.addColorStop(0, '#FFF5F7');
    gradient.addColorStop(1, '#FFF0F5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Add decorative background pattern
    ctx.save();
    const patternGradient = ctx.createLinearGradient(0, 0, 1080, 1920);
    patternGradient.addColorStop(0, 'rgba(255, 51, 102, 0.05)');
    patternGradient.addColorStop(0.33, 'rgba(255, 107, 61, 0.05)');
    patternGradient.addColorStop(0.66, 'rgba(157, 80, 187, 0.05)');
    patternGradient.addColorStop(1, 'rgba(110, 72, 170, 0.05)');
    ctx.fillStyle = patternGradient;
    ctx.fillRect(0, 0, 1080, 1920);
    ctx.restore();

    // Draw title
    ctx.textAlign = 'center';
    ctx.font = 'bold 60px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#666';
    ctx.fillText('Your Musical Personality', 540, 240);

    // Draw dimension cards
    const dimensions = [
        { 
            title: window.currentPersonality.social.title,
            content: window.currentPersonality.social.description,
            rarity: window.currentPersonality.social.rarity,
            gradient: ['#FF6B6B', '#FF8E8E'] 
        },
        { 
            title: window.currentPersonality.emotional.title,
            content: window.currentPersonality.emotional.description,
            rarity: window.currentPersonality.emotional.rarity,
            gradient: ['#4F9CFF', '#6BB5FF'] 
        },
        { 
            title: window.currentPersonality.hidden.title,
            content: window.currentPersonality.hidden.description,
            rarity: window.currentPersonality.hidden.rarity,
            gradient: ['#9C4FFF', '#B07CFF'] 
        },
        { 
            title: window.currentPersonality.philosophy.title,
            content: window.currentPersonality.philosophy.description,
            rarity: window.currentPersonality.philosophy.rarity,
            gradient: ['#4CAF50', '#81C784'] 
        }
    ];

    dimensions.forEach((dim, index) => {
        const cardY = 550 + (index * 320);
        
        // Card background
        const cardGradient = ctx.createLinearGradient(90, cardY, 990, cardY + 280);
        cardGradient.addColorStop(0, dim.gradient[0]);
        cardGradient.addColorStop(1, dim.gradient[1]);
        ctx.fillStyle = cardGradient;
        
        ctx.beginPath();
        ctx.roundRect(90, cardY, 900, 280, 20);
        ctx.fill();

        // Card title
        ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillText(dim.title, 540, cardY + 60);

        // Card content
        ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const contentWords = dim.content.split(' ');
        let line = '';
        let lineY = cardY + 120;

        contentWords.forEach(word => {
            const testLine = line + word + ' ';
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width > 800) {
                ctx.fillText(line, 540, lineY);
                line = word + ' ';
                lineY += 40;
            } else {
                line = testLine;
            }
        });
        ctx.fillText(line, 540, lineY);

        // Rarity badge
        ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillText(dim.rarity, 540, cardY + 240);
    });

    // Add watermark
    ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillText('pursongality.com', 540, 1880);

    // Convert to image and trigger download
    const link = document.createElement('a');
    link.download = 'my-music-personality.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Move the Spotify connection logic to window load
window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
        // Remove code from URL immediately
        window.history.replaceState({}, document.title, window.location.pathname);
        
        document.querySelector('.btn').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        try {
            const tokenData = await getAccessToken(code);
            accessToken = tokenData.access_token;
            
            const tracks = await getTopTracks();
            console.log('Got tracks:', tracks);
            
            let features = null;
            try {
                features = await getAudioFeatures(tracks.items.map(t => t.id));
                console.log('Got audio features:', features);
            } catch (audioError) {
                console.log('Audio features failed, using track data instead:', audioError);
            }
            
            const personality = personalityAnalyzer.analyzePersonality(features?.audio_features, tracks.items);
            showResult(personality, tracks.items);
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('loading').style.display = 'none';
            document.querySelector('.btn').style.display = 'inline-block';
        }
    }
});

async function connectSpotify() {
    // Only handle the initial connection request
    if (window.location.search.includes('code=')) {
        return; // Let the load handler deal with the redirect
    }

    localStorage.clear();
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    localStorage.setItem('code_verifier', verifier);

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: 'user-top-read user-read-private user-library-read playlist-read-private',
        code_challenge_method: 'S256',
        code_challenge: challenge
    }).toString();

    window.location.href = 'https://accounts.spotify.com/authorize?' + params;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PersonalityAnalyzer;
} else if (typeof window !== 'undefined') {
    window.PersonalityAnalyzer = PersonalityAnalyzer;
}