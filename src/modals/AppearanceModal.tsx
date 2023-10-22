import { Box, Button, Link, Slider, Typography } from "@mui/material";
import { useAppearance } from "../store/appearance/hooks";
import {
  setBackgroundColor,
  setBoxShadow,
  setColor,
} from "../store/appearance/actions";
import { colors } from "../utils/consts";
import React, { useState } from "react";
interface ModalProps {
  close: () => void;
}
const fontSizes = [10, 12, 14, 16, 18];
export default function AppearanceModal({ close }: ModalProps) {
  const [fontSize, setFontSize] = React.useState(16);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setFontSize(newValue);
    }
  };
  const { backgroundColor, color, boxShadow } = useAppearance();
  return (
    <Box
      sx={{
        width: "600px",
      }}
    >
      <Typography
        sx={{
          mt: "32px",
          mb: "12px",
          fontSize: "23px",
          lineHeight: "28px",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Görünümü özelleştir
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#71767b",
          fontSize: "15px",
          lineHeight: "20px",
          mb: "20px",
        }}
      >
        Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.
      </Typography>
      <Box
        sx={{
          marginLeft: "32px",
          marginRight: "32px",
          marginBottom: "16px",
        }}
      >
        <Box
          sx={{
            border: "1px solid var(--background-third)",
            padding: "1rem",
            display: "flex",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            gap: "0.75rem",
            borderRadius: "1rem",
          }}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_x96.jpg"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "%100",
            }}
          />
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginBottom: "0.125rem",
                lineHeight: "1.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: "2opx",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                X
                <svg
                  viewBox="0 0 22 22"
                  height={18.75}
                  style={{
                    color: "#1d9bf0",
                    marginLeft: "2px",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  />
                </svg>
              </Typography>
              <Typography
                sx={{
                  marginLeft: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#71767b",
                }}
              >
                @X · 1sa
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "var(--color-base)",
              }}
            >
              X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar
              yatar. Gönderiler; fotoğraflar, videolar, bağlantılar, metinler,
              etiketler ve{" "}
              <Link
                sx={{
                  textDecoration: "none",
                }}
                href="/x"
              >
                @X
              </Link>
              gibi bahsetmeler içerebilir
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "var(--color-base-secondary)",
              fontSize: "13px",
              lineHeight: "20px",
              fontWeight: "bold",
              mb: "4px",
              ml: 2,
            }}
          >
            Yazı tipi boyutu
          </Typography>
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--background-secondary)",
              borderRadius: "16px",
              ml: 2,
              mr: 2,
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
              }}
            >
              Aa
            </Typography>
            <Slider
              value={fontSize}
              min={10}
              max={18}
              step={2}
              onChange={handleChange}
              marks={fontSizes.map((value) => ({
                value,
                label: (
                  <Box
                    key={value}
                    sx={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background:
                        value === fontSize
                          ? "var(--color-primary)"
                          : "var(--color-secondary)",
                      cursor: "pointer",
                      position: "absolute",
                      top: "-22px",

                      transform: "translateX(-50%)",
                    }}
                    onClick={() => setFontSize(value)}
                  />
                ),
              }))}
              sx={{
                marginBottom: "0px",
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? "var(--color-primary)"
                    : "var(--color-primary)",
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "20px",
              }}
            >
              Aa
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "var(--color-base-secondary)",
              fontSize: "13px",
              lineHeight: "20px",
              fontWeight: "bold",
              mb: "4px",
              ml: 2,
            }}
          >
            Renk
          </Typography>
          <Box
            sx={{
              paddingTop: "4px",
              paddingBottom: "8px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              background: "var(--background-secondary)",
              borderRadius: "16px",
              ml: 2,
              mr: 2,
            }}
          >
            {colors.map((c, index) => (
              <Button
                key={index}
                onClick={() => {
                  setColor({
                    ...color,
                    ...c,
                  });
                }}
                sx={{
                  "--bg": c.primary,
                  height: "40px",
                  width: "40px",
                  background: "var(--bg)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  minWidth: "0px",
                  "&:hover": {
                    background: "var(--bg)",
                  },
                }}
              >
                {color.primary === c.primary && (
                  <svg viewBox="0 0 24 24" width={25}>
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                )}
              </Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "var(--color-base-secondary)",
              fontSize: "13px",
              lineHeight: "20px",
              fontWeight: "bold",
              ml: 2,
              mb: "4px",
            }}
          >
            Arka plan
          </Typography>
          <Box
            sx={{
              paddingLeft: "12px",
              paddingRight: "12px",
              paddingTop: "4px",
              paddingBottom: "4px",
              mb: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              background: "var(--background-secondary)",
              borderRadius: "16px",
              gap: "8px",
              ml: 2,
              mr: 2,
            }}
          >
            <Button
              onClick={() => {
                setColor({
                  ...color,
                  base: "#0f1419",
                  baseSecondary: "#536471",
                });

                setBackgroundColor({
                  name: "light",
                  primary: "#fff",
                  secondary: "#f7f9f9",
                  third: "#eff3f4",
                  modal: "#00000066",
                });
                setBoxShadow(
                  "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px"
                );
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                height: "64px",
                paddingLeft: "10px",
                paddingRight: "30px",
                background: "white",
                borderRadius: "4px",
                border: "1px solid #5555",
                ...(backgroundColor.name === "light" && {
                  borderColor: "var(--color-primary)",
                  border: "2px solid",
                }),
                "&:hover": {
                  background: "white",
                },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: " rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid  #3e4144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(backgroundColor.name === "light" && {
                      borderColor: "var(--color-primary)",
                      border: "2px solid",
                      color: "white",
                      background: "var(--color-primary)",
                    }),
                  }}
                >
                  {backgroundColor.name === "light" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                      />
                    </svg>
                  )}
                </Box>
              </Box>
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#0f1419",
                  fontWeight: "bold",
                }}
              >
                Varsayılan
              </Typography>
            </Button>
            <Button
              onClick={() => {
                setColor({
                  ...color,
                  base: "#f7f9f9",
                  baseSecondary: "#8b98a5",
                });

                setBackgroundColor({
                  name: "dark",
                  primary: "#15202b",
                  secondary: "#1e2732",
                  third: "#263340",
                  modal: "#5b708366",
                });
                setBoxShadow(
                  "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1pxs"
                );
              }}
              sx={{
                height: "64px",
                paddingLeft: "20px",
                paddingRight: "20px",
                background: "#15202b",
                borderRadius: "4px",
                justifyContent: "flex-start",
                border: "1px solid #5555",
                ...(backgroundColor.name === "dark" && {
                  borderColor: "var(--color-primary)",
                  border: "2px solid",
                }),
                "&:hover": {
                  backgroundColor: "#15202b",
                },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: " rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid  #3e4144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(backgroundColor.name === "dark" && {
                      borderColor: "var(--color-primary)",
                      border: "2px solid",
                      color: "white",
                      background: "var(--color-primary)",
                    }),
                  }}
                >
                  {backgroundColor.name === "dark" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                      />
                    </svg>
                  )}
                </Box>
              </Box>
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#f7f9f9",
                  fontWeight: "bold",
                }}
              >
                Loş
              </Typography>
            </Button>
            <Button
              onClick={() => {
                setColor({
                  ...color,
                  base: "#e7e9ea",
                  baseSecondary: "#71767b",
                });
                setBackgroundColor({
                  name: "darker",
                  primary: "#000000",
                  secondary: "#16181c",
                  third: "#212327",
                  modal: "#5b708366",
                });
                setBoxShadow(
                  "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1pxs"
                );
              }}
              sx={{
                border: "1px solid #5555",
                height: "64px",
                paddingLeft: "10px",
                paddingRight: "20px",
                background: "black",
                borderRadius: "4px",
                ...(backgroundColor.name === "darker" && {
                  borderColor: "var(--color-primary)",
                  border: "2px solid",
                }),
                "&:hover": {
                  backgroundColor: " black",
                },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: " rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid  #3e4144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(backgroundColor.name === "darker" && {
                      borderColor: "var(--color-primary)",
                      border: "2px solid",
                      color: "white",
                      background: "var(--color-primary)",
                    }),
                  }}
                >
                  {backgroundColor.name === "darker" && (
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                      />
                    </svg>
                  )}
                </Box>
              </Box>
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#f7f9f9",
                  fontWeight: "bold",
                }}
              >
                Işıklar kapalı
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          mt: "15px",
          mb: "25px",
        }}
      >
        <Button
          sx={{
            background: "var(--color-primary)",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            minHeight: "34px",
            paddingLeft: "15px",
            paddingRight: "15px",
            borderRadius: "99999px",
            "&:hover": {
              background: "var(--color-primary)",
            },
          }}
          onClick={close}
          variant="outlined"
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "14px",
              lineHeight: "19px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Bitti
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
