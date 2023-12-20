import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetAllBlogs } from '../Redux/AllBlogSlice';
import { GetSearchBlog } from '../Redux/Search';
import { GetRecentBlogs } from '../Redux/Recent';
import ReactPaginate from 'react-paginate';
import { imageUrl } from '../Api/imageUrl';

const Blog = () => {

    const { recent_blog } = useSelector((state) => state?.RecentBlog);
    // console.log('recent===>',recent_blog);

    const { search_blog } = useSelector((state) => state?.SearchBlog);
    const count = search_blog?.count
    console.log('count===>',count);

    const { all_blog_data } = useSelector((state) => state?.AllBlog);
    const blog = all_blog_data?.data
    console.log('blog===>',blog);


    // Date And Time
    const formatDate = (timestamp) => {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        };
      
        return new Date(timestamp).toLocaleString('en-US', options);
      };

    
// Search Blog
const [search, setSearch] = useState('');

const handleChange = (e) => {
  const value = e.target.value;
  setSearch(e.target.value);
  // Dispatch action to get search results
  dispatch(GetSearchBlog(value));
};


// Pgination All Blogs
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2)


 

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(GetRecentBlogs());
      dispatch(GetAllBlogs());

    }, [dispatch]); 
    
    const handlePageClick = (selectedPage) => {
      setCurrentPage(selectedPage.selected + 1);
  }
 

  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blog?.slice(indexofFirstPost, indexOfLastPost);



  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Our blog</span>
          <h1 class="text-capitalize mb-5 text-lg">Blog articles</h1>


        </div>
      </div>
    </div>
  </div>
</section>

<section class="section blog-wrap">
  <div class="container">
    <div class="row">

{/* start blog Content */}

<div class="col-lg-8">
    <div class="row">
        {currentPosts?.map((item, index) => {
            return (
                <>
                    <div class="col-lg-12 col-md-12 mb-5">
                        <div class="blog-item">
                            <div class="blog-thumb">
                                <img src={`${imageUrl}${item.image}`} alt="" class="img-fluid" style={{ width: "350", height: "215" }} />
                            </div>

                            <div class="blog-item-content">
                                <div class="blog-item-meta mb-3 mt-4">
                                    <span class="text-black text-capitalize mr-3"><i class="icofont-calendar mr-1"></i> {formatDate(item?.createdAt)}</span>
                                </div>

                                <h2 class="mt-3 mb-3"><Link to={`/blog-single/${item?._id}`}>{item?.title}</Link></h2>

                                <p class="mb-4">{item?.description}</p>

                                <Link to={`/blog-single/${item?._id}`} class="btn btn-main btn-icon btn-round-full">Details <i class="icofont-simple-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </>
            );
        })}

        {/* Pagination controls */}


        <div className="col-lg-12 col-md-12">
            <div className="blog-pagination">
            <ReactPaginate
    breakLabel={<span className="page-numbers current">...</span>}
    nextLabel={<a className="page-numbers" href="#!"><i className="icofont-thin-double-right"></i></a>}
    onPageChange={handlePageClick}
    pageCount={Math.ceil(blog?.length / postPerPage)}
    previousLabel={<a className="page-numbers" href="#!">{'< Previous'}</a>}
    activeClassName={'active'}
    containerClassName={'pagination'}
    pageClassName={'page-numbers'}
    pageLinkClassName={'page-link'}
    breakClassName={'page-numbers current'}
    breakLinkClassName={'page-link'}
    previousClassName={'page-numbers'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-numbers'}
    nextLinkClassName={'page-link'}
/>

            </div>
        </div>

        
        {/* Pagination controls */}
    </div>
</div>



{/* end blog Content */}

      <div class="col-lg-4">
        <div class="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
	<div class="sidebar-widget search  mb-3 ">
		<h5>Search Here</h5>


		<form class="search-form">
  <input type="text" class="form-control" placeholder="search" value={search} onChange={handleChange} />
  <i class="ti-search"></i>
</form>


	</div>

{/* start Searched Blogs */}

<div class="sidebar-widget latest-post mb-3">
  {search ? <h5>{count} Blogs found</h5> : null}

  {search_blog?.data?.length > 0 ? (
    search_blog.data.map((item, index) => (
      <div class="py-2" key={index}>
        <span class="text-sm text-muted">{formatDate(item?.createdAt)}</span>
        <h6 class="my-2">
          <Link to={`/blog-single/${item?._id}`}>{item?.title}</Link>
        </h6>
      </div>
    ))
  ) : (
    <p style={{ color: search ? 'red' : 'transparent', fontWeight: 'bold' }}>
      No blogs found!
    </p>
  )}
</div>

{/* end Searched Blogs */}


  <div class="sidebar-widget latest-post mb-3">
		<h5>Recent Blogs</h5>

    {recent_blog?.data?.map((item, index) => {
return (
     <>

        <div class="py-2">
        	<span class="text-sm text-muted">{formatDate(item?.createdAt)}</span>
            <h6 class="my-2"><Link to={`/blog-single/${item?._id}`}>{item?.title}</Link></h6>
        </div>

        </>
        );
       })}
	</div>

	

</div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Blog
