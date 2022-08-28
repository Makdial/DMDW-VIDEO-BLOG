import { Avatar, Flex, Image } from "@chakra-ui/react";
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { firebaseApp } from "../firebase-config";
import { getUserInfo, userUploadedVideos } from "../utils/fetchData";
import RecommendedVideos from "./RecommendedVideos";
import { fetchUser,  } from "../utils/fetchUser";
import Spinner from "./Spinner";
import VideoDetail from "./VideoDetail";

const randomImage =
  "https://source.unsplash.com/1600x900/?nature,photography,technology";

  const avatar =
  "https://ak.picdn.net/contributors/3038285/avatars/thumb.jpg?t=164360626";

const UserProfile = () => {
  const { userId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  //const [userInfo, setUserInfo] = useState(null);
  const [feeds, setFeeds] = useState(null);
  const [userInfo] = fetchUser();

  const fireStoreDb = getFirestore(firebaseApp);

  useEffect(() => {
    setIsLoading(true);

    if (userId) {
      getUserInfo(fireStoreDb, userId).then((user) => {
        //setUserInfo(user);
        setIsLoading(false);
      });
      userUploadedVideos(fireStoreDb, userId).then((data) => {
        setFeeds(data);
      });
    }
  }, [userId]);

  if (isLoading) return <Spinner />;
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      width={"full"}
      height="auto"
      p={2}
      direction="column"
    >
      <Flex
        justifyContent={"center"}
        width="full"
        position={"relative"}
        direction="column"
        alignItems={"center"}
      >
        <Image
          src={randomImage}
          height={"320px"}
          width="full"
          objectFit={"cover"}
          borderRadius={"md"}
        />
          <Link to={`/userDetail/${userId}`}>
            <Avatar
              src={userInfo.photoURL ? userInfo?.photoURL : avatar}
              rounded={"full"}
              width={"50px"}
              height={"50px"}
              border={"2px"}
              mt={-10}
            />
          </Link>
      </Flex>
      {feeds && (
        <Flex direction={"column"} width="full" my={6}>
          <RecommendedVideos feeds={feeds} />
        </Flex>
      )}
    </Flex>
  );
};

export default UserProfile;
