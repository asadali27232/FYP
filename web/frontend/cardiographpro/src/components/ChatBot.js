// components/ChatBot.js
'use client';
import { useState } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        // Append user message to chat history
        const newChatHistory = [
            ...chatHistory,
            { sender: 'user', text: message },
        ];
        setChatHistory(newChatHistory);

        try {
            // Send the message to the API
            const response = await fetch(
                'http://localhost:8000/chatbot/chat/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({ message }),
                }
            );

            const data = await response.json();

            // Append API response to chat history
            setChatHistory([
                ...newChatHistory,
                {
                    sender: 'bot',
                    text: data.response || 'No response from server.',
                },
            ]);
        } catch (error) {
            // Handle errors (e.g., network issue)
            setChatHistory([
                ...newChatHistory,
                { sender: 'bot', text: 'Failed to connect to the server.' },
            ]);
        } finally {
            setMessage(''); // Clear input field
        }
    };

    return (
        <div style={styles.chatBotContainer}>
            {/* Floating Button */}
            <button onClick={toggleChat} style={styles.floatingButton}>
                💬
            </button>

            {/* Chatbox */}
            {isOpen && (
                <div style={styles.chatBox}>
                    <div style={styles.chatHeader}>
                        <span>Chatbot</span>
                        <button onClick={toggleChat} style={styles.closeButton}>
                            ✖
                        </button>
                    </div>
                    <div style={styles.chatBody}>
                        {chatHistory.map((chat, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.chatMessage,
                                    alignSelf:
                                        chat.sender === 'user'
                                            ? 'flex-end'
                                            : 'flex-start',
                                    backgroundColor:
                                        chat.sender === 'user'
                                            ? '#0e1136'
                                            : '#e0e0e0',
                                    color:
                                        chat.sender === 'user'
                                            ? '#fff'
                                            : '#000',
                                }}>
                                {chat.text}
                            </div>
                        ))}
                    </div>
                    <div style={styles.chatFooter}>
                        <input
                            type="text"
                            placeholder="Type your concern..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={styles.input}
                            onKeyDown={(e) =>
                                e.key === 'Enter' && handleSendMessage()
                            }
                        />
                        <button
                            onClick={handleSendMessage}
                            style={styles.sendButton}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Inline Styles
const styles = {
    chatBotContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
    },
    floatingButton: {
        backgroundColor: '#0e1136',
        borderRadius: '50%',
        color: '#fff',
        border: 'none',
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        fontSize: '24px',
    },
    chatBox: {
        width: '300px',
        height: '400px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
    },
    chatHeader: {
        padding: '10px',
        backgroundColor: '#0e1136',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '18px',
        cursor: 'pointer',
    },
    chatBody: {
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    chatMessage: {
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '80%',
        wordWrap: 'break-word',
    },
    chatFooter: {
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ccc',
    },
    input: {
        flex: 1,
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    sendButton: {
        padding: '8px 12px',
        backgroundColor: '#0e1136',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ChatBot;
