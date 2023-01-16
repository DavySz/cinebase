import { IMDB_IMAGES_BASE_URL } from "@env";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { Text } from "../../components/Text/text";
import { getReview } from "../../services/imdb/review/review";
import { TGetReviewResponse } from "../../services/imdb/review/review.types";
import {
  Avatar,
  Container,
  Description,
  Footer,
  Photo,
  Row,
} from "./reviewDetails.styles";
import { TRouteParams } from "./reviewDetails.types";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import moment from "moment";

export function ReviewDetails() {
  const { colors } = useTheme();
  const { id } = useRoute().params as TRouteParams;
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [review, setReview] = useState<TGetReviewResponse>(
    {} as TGetReviewResponse
  );

  async function loadData() {
    try {
      setScreenState("loading");
      const response = await getReview(id);
      setReview(response);
      setScreenState("ready");
    } catch {
      setScreenState("error");
    }
  }

  function renderStars() {
    return (
      <Row mb={8}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Entypo
              name={
                review.author_details &&
                review.author_details.rating >= item * 2
                  ? "star"
                  : "star-outlined"
              }
              color={colors.start_icon}
              key={item}
              size={24}
            />
          );
        })}
      </Row>
    );
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate title="Review" previousRoute="MovieReviews">
      <ScreenState
        screenState={screenState}
        errorRecoveryCallback={() => loadData()}
      >
        <Container>
          <Description
            color="background_primary"
            font="primary_500"
            size="16"
            mb={32}
          >
            {review.content}
          </Description>
          <Row>
            {review.author_details && review.author_details.avatar_path ? (
              <Photo
                source={{
                  uri: `${IMDB_IMAGES_BASE_URL}${review.author_details.avatar_path}`,
                }}
              />
            ) : (
              <Avatar>
                <Text font="secondary_600" size="32" color="background_primary">
                  {review.author && review.author.charAt(0).toUpperCase()}
                </Text>
              </Avatar>
            )}
            <Footer>
              {renderStars()}
              <Text font="secondary_600" size="16" color="background_primary">
                {review.author}
              </Text>
              <Text font="secondary_600" size="16" color="background_primary">
                {moment(review.created_at).format("DD/MM/YYYY")}
              </Text>
            </Footer>
          </Row>
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
