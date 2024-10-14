import {useState, useEffect} from 'react';

const useApi = (url) => {
  const [listdata, setListData] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const jsonData = await response.json();
  //     setListData(jsonData);

  //   } catch (error) {
  //     setError(error);
  //   }
  // }

  const getByName = async (name) => {
    try {
      const response = await fetch(`${url}?name=${name}`);
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData[0];
    } catch (error) {
      setError(error);
    }
  }

  const addJob = async (name, newJob) => {
    try {
      const userData = await getByName(name);

      if (!userData || !userData.id) {
        throw new Error('User not found');
      }

      const updatedJobs = [...userData.jobs, newJob];
      const updateResponse = await fetch(`${url}/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData, // Giữ nguyên các dữ liệu khác
          jobs: updatedJobs, // Cập nhật jobs
        }),
      });
      return await updateResponse.json();
    } catch (error) {
      setError(error);
    }
  }

  const editJob = async (name, oldJob, newJob) => {
    try {
      const userData = await getByName(name);

      if (!userData || !userData.id) {
        throw new Error('User not found');
      }

      const updatedJobs = userData.jobs.map(job => job === oldJob ? newJob : job);
      const updateResponse = await fetch(`${url}/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData, // Giữ nguyên các dữ liệu khác
          jobs: updatedJobs, // Cập nhật jobs
        }),
      });
      return await updateResponse.json();
    } catch (error) {
      setError(error);
    }
  }

  const deleteJob = async (name, jobToDelete) => {
    try {
      const userData = await getByName(name);

      if (!userData || !userData.id) {
        throw new Error('User not found');
      }

      const updatedJobs = userData.jobs.filter(job => job !== jobToDelete);
      const updateResponse = await fetch(`${url}/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData, // Giữ nguyên các dữ liệu khác
          jobs: updatedJobs, // Cập nhật jobs
        }),
      });
      return await updateResponse.json();
    } catch (error) {
      setError(error);
    }
  }



  return {data, getByName, addJob, editJob, deleteJob};
}

export default useApi;