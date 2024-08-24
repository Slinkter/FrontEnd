import React from "react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import {
    Box,
    Container,
    Flex,
    Skeleton,
    SkeletonCircle,
    Text,
    VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
    const { isLoading, posts } = useGetFeedPosts(); // posts : postsFollowings
    console.log("isloading : ", isLoading, "posts : ", posts);

    return (
        <Container
            maxW={"container.sm"}
            py={10}
            px={2}
            border={"3px solid"}
            borderColor={"green.200"}
        >
            {isLoading &&
                [0, 1, 2].map((_, idx) => (
                    <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                        <Flex gap="2">
                            <SkeletonCircle size="10" />
                            <VStack gap={2} alignItems={"flex-start"}>
                                <Skeleton height="10px" w={"200px"} />
                                <Skeleton height="10px" w={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"400px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}

            {!isLoading &&
                posts.length > 0 &&
                posts.map((post) => <FeedPost key={post.id} post={post} />)}

            {!isLoading && posts.length === 0 && (
                <>
                    <Text>you dont have any friends</Text>
                </>
            )}

            <pre>{JSON.stringify(posts[0]?.id, null, 2)}</pre>
        </Container>
    );
};

export default FeedPosts;
