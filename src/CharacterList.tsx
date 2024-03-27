import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import data from './assets/char.json'; // Import data from local file
import './App.css';

interface Character {
  id: string;
  name: string;
  color: string;
  path: string;
}

const CharacterPreview: React.FC<{ character: Character | null }> = ({ character }) => {
  if (!character) return null;

  return (
    <div style={{ marginLeft: '20px', marginTop: '100px' }}>
      <h2>{character.name}</h2>
      <p>Color: {character.color}</p>
      {/* Add more details as needed */}
    </div>
  );
};

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    setCharacters(data);
  }, []);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div style={{}}>
      <div style={{ borderRadius: 8, position: 'fixed', top: '100px', left: '350px', width: '200px', overflowX: 'hidden' }}>
        <div id="scrollableDiv" style={{ width: '100%', overflowY: 'auto', maxHeight: '40vw' }}>
          <InfiniteScroll
            dataLength={characters.length}
            next={() => {}}
            hasMore={false}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain style={{ color: 'white' }}>It is all, nothing more.</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={characters}
              renderItem={(item, index) => (
                <List.Item
                  key={item.id}
                  style={{ backgroundColor: index % 2 === 0 ? '#1f1f1f' : '#181818', cursor: 'pointer' }}
                  onClick={() => handleCharacterClick(item)}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={`./src/assets/avatar/${item.path}`} size={64} style={{ borderRadius: 8, marginLeft: '5px' }} />} // Adjusted marginLeft for avatar
                    title={<a style={{ color: 'white' }}>{item.name}</a>}
                    /* description={`Type: ${item.color}`} */
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
      <CharacterPreview character={selectedCharacter} />
    </div>
  );
};

export default App;
