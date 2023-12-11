import React, { useState } from 'react';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { add_banner } from '../../store/Reducers/bannerReducer';
import { useSelector, useDispatch } from 'react-redux';
const AddBanner = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { productId } = useParams();
  const [imageShow, setImageShow] = useState('');
  const [banner, setBanner] = useState('');

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;

    console.log(files);

    if (length > 0) {
      setBanner(files[0]);
      setImageShow(URL.createObjectURL(files[0]));
    }
  };

  const addBanner = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('banner', banner);
    dispatch(add_banner(formData));
  };
  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='w-full p-4  bg-primary rounded-md'>
        <div className='flex justify-between items-center pb-4'>
          <h1 className='text-white text-xl font-semibold'>Add Banner</h1>
          <Link
            className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 '
            to='/seller/dashboard/banners'
          >
            Banners
          </Link>
        </div>
        <div>
          <form onSubmit={addBanner}>
            <div className=' mb-4'>
              <label
                className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:primary w-full text-white'
                htmlFor='image'
              >
                <span className='text-4xl'>
                  <BiSolidCloudUpload />
                </span>
                <span>select banner image</span>
              </label>
              <input
                required
                onChange={imageHandle}
                multiple
                className='hidden'
                type='file'
                id='image'
              />
            </div>
            {imageShow && (
              <div className='mb-4'>
                <img
                  className='w-full h-auto'
                  src={imageShow}
                  alt='banner img'
                />
              </div>
            )}

            <button className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow tetxt-white rounded-sm px-7 py-2 my-2'>
              Add Banner
            </button>

            {/* <div className='w-full mb-4 relative'>
              <div
                onClick={() => setShow(!show)}
                className='w-full h-[50px] rounded-md border border-white cursor-pointer flex justify-start items-center px-4 text-white flex px-4'
              >
                <span>Select Banner</span>
              </div>

              {show && (
                <div className='w-full h-[300px] bg-primary relative'>
                  <div className='p-4'>
                    <input
                      className='px-4 py-2 focus:primary outline-none bg-primary border border-secondary rounded-md text-white w-full px-4 py-2'
                      type='text'
                    />
                  </div>
                  <div></div>
                </div>
              )}
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
