const mockData = {
    competitions: [
        {
            id: 1,
            cover: 'https://via.placeholder.com/300x200.png?text=Competition+1',
            name: 'Design a New Logo',
            niche: 'Graphic Design',
            brandLogo: 'https://via.placeholder.com/50.png?text=Brand+1',
            brandName: 'Creative Agency',
            prize: 500,
            date: '2025-03-10',
            active: true,
            comp_descrip: 'Create a modern and memorable logo for our agency. Must be original and reflect our brand values of creativity and innovation. Submit your designs in PNG format.',
            entry_examp: 'Examples: A minimalist logo with a vibrant color palette. A geometric logo with a hidden message. A logo that combines text and abstract shapes.',
            prize_distribution: [
                { place: 1, amount: 250 },
                { place: 2, amount: 150 },
                { place: 3, amount: 100 },
            ],
            rules: 'Entries must be original and not infringe on any existing copyrights. Logos must be submitted in PNG format with a minimum resolution of 300 DPI. The competition is open to designers of all skill levels.',
        },
        {
            id: 2,
            cover: 'https://via.placeholder.com/300x200.png?text=Competition+2',
            name: 'Best Startup Pitch',
            niche: 'Entrepreneurship',
            brandLogo: 'https://via.placeholder.com/50.png?text=Brand+2',
            brandName: 'Startup Inc.',
            prize: 1000,
            date: '2025-02-28',
            active: false,
            comp_descrip: 'Pitch your innovative startup idea to our panel of investors. Focus on market potential, scalability, and financial projections. Presentations should be 5-10 minutes.',
            entry_examp: 'Examples: A pitch deck with clear visuals and data. A compelling story that highlights the problem and solution. A live demo of the product or service.',
            prize_distribution: [
                { place: 1, amount: 500 },
                { place: 2, amount: 300 },
                { place: 3, amount: 200 },
            ],
            rules: 'Pitches must be original and not based on existing business models. Teams must consist of 2-5 members. Presentations should be in English. All financial projections must be realistic and supported by data.',
        },
        {
            id: 3,
            cover: 'https://via.placeholder.com/300x200.png?text=Competition+3',
            name: 'Ultimate Coding Challenge',
            niche: 'Software Development',
            brandLogo: 'https://via.placeholder.com/50.png?text=Brand+3',
            brandName: 'Tech Innovators',
            prize: 2000,
            date: '2025-01-15',
            active: false,
            comp_descrip: 'Solve a complex coding problem within a given time limit. Focus on efficiency, code quality, and problem-solving skills. Solutions should be submitted in a GitHub repository.',
            entry_examp: 'Examples: A well-documented codebase with unit tests. An algorithm that optimizes performance. A creative solution that goes beyond the requirements.',
            prize_distribution: [
                { place: 1, amount: 1000 },
                { place: 2, amount: 600 },
                { place: 3, amount: 400 },
            ],
            rules: 'Solutions must be written in Python or JavaScript. Code must be well-documented and follow best practices. Participants must not use any external libraries or frameworks. Solutions must be submitted within the given time limit.',
        },
    ],
    profiles: [
        {
          id: 101,
          username: 'user1',
          password: 'password1', 
          name: 'User One',
          avatar: 'https://via.placeholder.com/100.png?text=User1'
        },
        {
          id: 102,
          username: 'user2',
          password: 'password2',
          name: 'User Two',
          avatar: 'https://via.placeholder.com/100.png?text=User2'
        }
      ],
    linked_accounts: [
        { id: 1, profile_id: 101, social: 'ig', username: 'user1_ig', profile_pic: require('./assets/images/instagram.png') },
        { id: 2, profile_id: 101, social: 'tik', username: 'user1_tik', profile_pic: require('./assets/images/tiktok.png') },
        { id: 3, profile_id: 102, social: 'snap', username: 'user2_snap', profile_pic: require('./assets/images/snapchat.png') },
        { id: 4, profile_id: 102, social: 'ig', username: 'user2_ig', profile_pic: require('./assets/images/instagram.png') },
    ],
    content: [
        { id: 1, profile_id: 101, linked_account_id: 1, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+1', views: 1200 },
        { id: 2, profile_id: 101, linked_account_id: 1, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+2', views: 800 },
        { id: 3, profile_id: 101, linked_account_id: 1, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+3', views: 2000 },
        { id: 4, profile_id: 101, linked_account_id: 2, preview_pic: 'https://via.placeholder.com/150.png?text=TikTok+Post+1', views: 1500 },
        { id: 5, profile_id: 101, linked_account_id: 2, preview_pic: 'https://via.placeholder.com/150.png?text=TikTok+Post+2', views: 900 },
        { id: 6, profile_id: 101, linked_account_id: 2, preview_pic: 'https://via.placeholder.com/150.png?text=TikTok+Post+3', views: 1800 },
        { id: 7, profile_id: 102, linked_account_id: 3, preview_pic: 'https://via.placeholder.com/150.png?text=Snapchat+Post+1', views: 1100 },
        { id: 8, profile_id: 102, linked_account_id: 3, preview_pic: 'https://via.placeholder.com/150.png?text=Snapchat+Post+2', views: 700 },
        { id: 9, profile_id: 102, linked_account_id: 3, preview_pic: 'https://via.placeholder.com/150.png?text=Snapchat+Post+3', views: 2200 },
        { id: 10, profile_id: 102, linked_account_id: 4, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+4', views: 1300 },
        { id: 11, profile_id: 102, linked_account_id: 4, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+5', views: 850 },
        { id: 12, profile_id: 102, linked_account_id: 4, preview_pic: 'https://via.placeholder.com/150.png?text=IG+Post+6', views: 1900 },
    ],
    submitted_entries: [
        { id: 1, competition_id: 1, profile_id: 101, submitted_at: '2025-03-15T10:00:00Z', active: true, views: 1500 },
        { id: 2, competition_id: 2, profile_id: 102, submitted_at: '2025-03-16T11:00:00Z', active: false, views: 800 },
    ],
};

export default mockData;