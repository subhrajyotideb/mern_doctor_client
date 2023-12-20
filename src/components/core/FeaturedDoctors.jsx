import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFeaturedDoctor } from "../../Redux/FeaturedDocSlice";
import { Link } from "react-router-dom";
import { imageUrl } from "../../Api/imageUrl";

const FeaturedDoctors = () => {
  
  
  const dispatch = useDispatch();

  const { featured_doctor_data } = useSelector(
    (state) => state?.FeaturedDoctor
  );
  //   const [visible, setVisible] = useState(2);

  useEffect(() => {
    dispatch(GetFeaturedDoctor());
  }, [dispatch]);

  //   const showmore = () => {
  //     setVisible((prevValue) => prevValue + 2);
  //   };

  return (
    <>
      <section class="section team">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center">
                <h2 class="mb-4">Meet Our Specialist</h2>
                <div class="divider mx-auto my-4"></div>
                <p>
                  Today’s users expect effortless experiences. Don’t let
                  essential people and processes stay stuck in the past. Speed
                  it up, skip the hassles
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            {featured_doctor_data?.data?.map((item, index) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-block mb-5 mb-lg-0">
                      <img
                        src={`${imageUrl}${item.image}`}
                        alt="Doctor Image"
                        className="img-fluid w-100"
                        style={{ width: "200px", height: "200px" }}
                      />

                      <div className="content">
                        <h4 className="mt-4 mb-0">
                          <Link to={`/doctor-single/${item?._id}`}>{item?.name}</Link>
                        </h4>
                        <p>{item?.description?.slice(0, 100)}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedDoctors;
