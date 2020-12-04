import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceHolder from './PlaceHolder';
import style from './Profile.module.scss';

interface IProps {
  mode: 'simple' | 'rowmMode';
  id?: string;
  rowModeText?: string;
}

const Profile = ({ mode, id, rowModeText }: IProps) => {
  const [isLoad, setIsLoad] = useState(false);
  const [name, setName] = useState('');
  const [userCode, setUserCode] = useState('');
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/auth/${id}`)
      .then((response) => {
        if (response.status === 200) {
          //setIsLoad(true);
          console.log(response.data);
          setIsLoad(true);
          setImagePath(response.data.profile);
          setName(response.data.name.split('#')[0]);
          setUserCode(response.data.name.split('#')[1]);
        }
      });
  }, []);

  if (!isLoad) {
    return (
      <PlaceHolder
        width="3.5rem"
        height="3.5rem"
        borderRadius="100px"
      ></PlaceHolder>
    );
  }

  return (
    <>
      {mode === 'simple' ? (
        <div>심플버전 로딩완료</div>
      ) : (
        <div className={style.rowmode}>
          <img
            className={style.rowmode__profileimage}
            src={`${process.env.NEXT_PUBLIC_BACKEND}${imagePath}`}
          />
          <div className={style.rowmode__textarea}>
            <div>
              <span className={style.rowmode__username}>{name}</span>
              <span className={style.rowmode__usercode}>#{userCode}</span>
            </div>
            <span className={style.rowmode__type}>{rowModeText}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
