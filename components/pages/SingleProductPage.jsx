import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ReportIcon from "@mui/icons-material/Report";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductImagesSlider from "../product-images-slider/ProductImagesSlider";

export const SingleProductPage = () => {
  const CustomTypo = styled(Typography)({
    fontSize: "18px",
    fontWeight: 700,
  });
  const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: 400,
    color: "#282828",
  });
  const CustomGrid = styled(Grid)({
    margin: "0 16px",
    textAlign: "center",
  });
  const CustomDivider = styled(Divider)({
    border: "0.50px solid white",
  });
  const TitleTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: 700,
    color: "#00A693",
  });
  const BoxTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: 700,
    color: "white",
    textAlign: "justify",
  });

  return (
    <Box
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid container direction="row" xs={12} marginTop="100px">
        <Grid container direction="row" gap="26px" xs={6}>
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
            خانه {">"} لوازم موسیقی
          </Typography>
          <Grid container direction="row" gap="10">
            <Grid container xs={9}>
              <CustomBox width="385px" height="100px">
                <Grid container direction="column" gap="10px">
                  <Typography
                    variant="h1"
                    sx={{ fontSize: "24px", fontWeight: 700 }}
                  >
                    گرامافون قدیمی 150 ساله
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <CustomTypo>قیمت:</CustomTypo>
                    <CustomTypo>1،500،000 تومان</CustomTypo>
                  </Grid>
                </Grid>
              </CustomBox>
            </Grid>
            <Grid container gap="15px" xs={3}>
              <Grid container direction="row">
                <LocationOnOutlinedIcon />
                <Typography>تهران، ستارخان</Typography>
              </Grid>
              <Grid container direction="row">
                <DateRangeOutlinedIcon />
                <Typography>4 ماه قبل</Typography>
              </Grid>
              <Grid container direction="row">
                <MusicNoteOutlinedIcon />
                <Typography>لوازم موسیقی</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            width="335px"
            height="62px"
            borderRadius="5px"
            bgcolor="#00A693"
            padding="5px"
            direction="row"
            margin="0 auto"
            justifyContent="center"
          >
            <CustomGrid>
              <CallIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <Text>تماس</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <ChatBubbleOutlinedIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <Text>چت</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <ReportIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <Text>گزارش</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <BookmarkIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <Text>ذخیره</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <ShareIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <Text>اشتراک</Text>
            </CustomGrid>
          </Grid>
          <Grid container gap="10px">
            <TitleTypography variant="h2">مشخصات:</TitleTypography>
            <CustomBox width="670px" height="110px">
              <Grid container direction="row">
                <Grid container xs={7} gap="8px">
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                </Grid>
                <Grid container xs={5} gap="8px">
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                  <Grid container direction="row" gap="3px">
                    <BoxTypography>قدمت محصول: </BoxTypography>
                    <BoxTypography>
                      ................................
                    </BoxTypography>
                    <BoxTypography>500 سال</BoxTypography>
                  </Grid>
                </Grid>
              </Grid>
            </CustomBox>
          </Grid>
          <Grid container gap="10px">
            <TitleTypography>توضیحات:</TitleTypography>
            <Box width="670px">
              <BoxTypography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
              </BoxTypography>
            </Box>
            <Grid container justifyContent="center">
              <Button endIcon={<KeyboardArrowDownIcon />}>مشاهده بیشتر</Button>
            </Grid>
            <Grid
              container
              width="445px"
              height="130px"
              borderRadius="10px"
              bgcolor="white"
              margin="0 auto"
              padding="16px 26px"
              gap="10px"
            >
              <Grid container direction="row">
                <Grid
                  container
                  direction="row"
                  gap="8px"
                  alignItems="center"
                  xs={8}
                >
                  <Avatar alt="profile" src="/images/profile.png" />
                  <Typography fontSize="16px" fontWeight={400} color="#282828">
                    فروشگاه یاسری
                  </Typography>
                </Grid>
                <Button variant="contained" xs={4}>
                  اطلاعات تماس
                </Button>
              </Grid>
              <Grid container justifyContent="center">
                <ButtonBase>اجناس دیگر این فروشگاه</ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={6} height="100px">
          <ProductImagesSlider />
        </Grid>
      </Grid>
    </Box>
  );
};
