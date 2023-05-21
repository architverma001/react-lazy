import React, { Suspense, useEffect, useState, useRef } from 'react';
import axios from 'axios';
const Message = React.lazy(() => import('./Message'));

function Allmessage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchChats(page); // Fetch initial chats

    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        const scrollThreshold = (80 / 100) * clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
          // User has scrolled to the bottom (with a threshold of 2vh)
          setPage(prevPage => prevPage + 1); // Increment the page number
        }
      }
    };

    containerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page > 0) {
      setLoading(true);
      fetchChats(page);
    }
  }, [page]);

  const fetchChats = (pageNumber) => {
    axios.get(`http://3.111.128.67/assignment/chat?page=${page}`).then((res) => {
        console.log(res.data);
        setData(prevData => [...prevData, ...res.data.chats]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error retrieving chat data:', error);
        setLoading(false);
      });
  };

  return (
    <div className='message' ref={containerRef} style={{ height: '55vh', overflow: 'auto' }}>
      <Suspense fallback={<div>please wait...</div>}>
        {data.map((chat) => {
          const { id, message, sender, time } = chat;
          const senderImage = sender && sender.image ? sender.image : '';
          const user_idz = sender && sender.user_id ? sender.user_id : '';
          return (
            <div key={id}>
              <Suspense fallback={<div>Loading...</div>}>
                <Message mess={message} prof={senderImage} idz={user_idz} />
              </Suspense>
            </div>
          );
        })}
      </Suspense>
      {loading && <div>Loading more chats...</div>}
    </div>
  );
}

export default Allmessage;