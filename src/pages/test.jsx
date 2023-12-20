import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlog } from '../redux/BlogSlice'
// import { ThreeCircles } from 'react-loader-spinner'
import Search from '../component/Blog/SearchBox'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import ReactPaginate from 'react-paginate'
import BlogSkeleton from './BlogSkeleton'

const Blog = () => {
    const { blog_data } = useSelector((state) => state?.blog)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2)

    useEffect(() => {
        dispatch(FetchBlog())
    }, [])

    console.log("b", blog_data);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    }
   

    const indexOfLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = blog_data?.data?.slice(indexofFirstPost, indexOfLastPost);

    return (
        <>
            <main id="main">
                {/ ======= Breadcrumbs ======= /}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container ">
                        <div className="d-flex justify-content-between align-items-center pt-3">
                            <h2>Blog</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Blog</li>
                            </ol>
                        </div>
                    </div>
                </section>{/ End Breadcrumbs /}


                {/ ======= Blog Section ======= /}
                <section id="blog" className="blog">
                    <div className="container">
                        <div className="row">

                            {blog_data !== null ? (
                                <>
                                    <div className="col-lg-8 entries">
                                        {
                                            currentPosts?.map((bData, index) => {
                                                return (
                                                    <>
                                                        <article className="entry" data-aos="fade-up">
                                                            <div className="entry-img">
                                                                <img src={`https://restapinodejs.onrender.com/api/blog/image/${bData._id}`} className="card-img-top" alt="..." />
                                                            </div>
                                                            <h2 className="entry-title">
                                                                <a href="blog-single.html">{bData.title}</a>
                                                            </h2>
                                                            <div className="entry-meta">
                                                                <ul>
                                                                    <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html">
                                                                        <time>{moment(bData.createdAt).format(' Do MM, YYYY')}</time>
                                                                        
                                                                    </a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                                                                </ul>


                                                            </div>
                                                            <div className="entry-content">
                                                                <p dangerouslySetInnerHTML={{
                                                                    __html: bData?.postText.slice(0, 350)
                                                                }}>
                                                                </p>
                                                                <div className="read-more">
                                                                    <Link to={`/blogdetails/${bData._id}`}>Read More</Link>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </>
                                                )
                                            })
                                        }
                                        {/ End blog entry /}

                                        <div className="blog-pagination">
                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel="next >"
                                                onPageChange={handlePageClick}
                                                pageCount={Math.ceil(blog_data?.data?.length / postPerPage)}
                                                previousLabel="< previous"
                                                activeClassName={'active'}
                                            />
                                        </div>
                                    </div>
                                    <Search />
                                </>
                            ) : (
                                <>

                                <BlogSkeleton/>
                                    {/* <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>

                                        <ThreeCircles
                                            height="90"
                                            width="90"
                                            color="#1bbd36"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        />

                                        

                                    </div> */}
                                </>
                            )}



                            {/ End blog entries list /}

                            {/ End blog sidebar /}

                        </div>
                    </div>
                </section>{/ End Blog Section /}
            </main>




        </>
    )
}

export default Blog