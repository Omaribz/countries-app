import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card width="264px" height="336px" overflow="hidden" marginBottom="60px">
      <Skeleton height="55%" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
