import { IMDB_IMAGES_BASE_URL } from "@env";
import moment from "moment";
import React from "react";
import { Text } from "../../../components/Text/text";
import { Avatar, Container, Content, Photo, Row } from "./reviewCard.styles";
import { IReviewCard } from "./reviewCard.types";

export function ReviewCard({
  author,
  content,
  created_at,
  imagePath,
}: IReviewCard) {
  return (
    <Container>
      <Row>
        {imagePath ? (
          <Photo source={{ uri: `${IMDB_IMAGES_BASE_URL}${imagePath}` }} />
        ) : (
          <Avatar>
            <Text font="secondary_600" size="16" color="background_primary">
              {author.charAt(0).toUpperCase()}
            </Text>
          </Avatar>
        )}
        <Content>
          <Row justify="space-between" align="center">
            <Text font="secondary_600" size="16" color="background_primary">
              {author}
            </Text>
            <Text font="secondary_600" size="12" color="text">
              {moment(created_at).format("DD/MM/YYYY")}
            </Text>
          </Row>
          <Text
            color="background_primary"
            font="secondary_400"
            numberOfLines={5}
            size="12"
          >
            {content}
          </Text>
        </Content>
      </Row>
    </Container>
  );
}
