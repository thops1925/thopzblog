// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Counter({ post }) {
// 	const [views, setViews] = useState(post.views);

// 	useEffect(() => {
// 		async function incrementViewCount() {
// 			try {
// 				const response = await axios.post('/api/view-counter', { id: post._id });
// 				setViews(response.data.views);
// 			} catch (error) {
// 				console.error('Error updating view count:', error);
// 			}
// 		}

// 		incrementViewCount();
// 	}, []);

// 	return (
// 		<div>
// 			<h1>{post.title}</h1>
// 			<p>{post.content}</p>
// 			<p>Views: {views}</p>
// 		</div>
// 	);
// }
