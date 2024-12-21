import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://caringnote.co.kr/api/", // API 서버 주소
  timeout: 30000, // 요청 제한 시간 (30초)
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 인터셉터 설정 예시
 */

// // 요청 인터셉터
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // 토큰 가져오기
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // 응답 인터셉터
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error);
//     return Promise.reject(error);
//   },
// );

/**
 * API 요청 예시
 */

// // GET 요청
// useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await getData<Post[]>('/posts');
//         setPosts(data);
//       } catch (error) {
//         console.error('Failed to fetch posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // PUT 요청 (포스트 수정)
//   const handleUpdatePost = async (updatedPost: Post) => {
//     try {
//       const data = await putData<Post>(`/posts/${updatedPost.id}`, updatedPost);
//       setPosts((prev) =>
//         prev.map((post) => (post.id === updatedPost.id ? data : post))
//       );
//       setEditPost(null); // 편집 상태 초기화
//     } catch (error) {
//       console.error('Failed to update post:', error);
//     }
//   };

//   // DELETE 요청 (포스트 삭제)
//   const handleDeletePost = async (postId: number) => {
//     try {
//       await deleteData<void>(`/posts/${postId}`);
//       setPosts((prev) => prev.filter((post) => post.id !== postId));
//     } catch (error) {
//       console.error('Failed to delete post:', error);
//     }
//   };

export default axiosInstance;
