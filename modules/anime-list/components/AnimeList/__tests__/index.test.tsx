import { Anime } from "@/services/api/anime.type";
import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import AnimeList from "..";

describe("AnimeList", () => {
  const sampleData = [
    {
      mal_id: 1,
      title: "title 1",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/7/21569.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/7/21569t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/7/21569l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/7/21569.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/7/21569t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/7/21569l.webp",
        },
      },
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
    },
  ] as Anime[];

  it("shows empty state and retry button when not loading and no data", () => {
    const onRefresh = jest.fn();
    render(<AnimeList data={[]} isLoading={false} onRefresh={onRefresh} />);

    expect(
      screen.getByText("Couldn't give you the anime you wanted 😭")
    ).toBeTruthy();

    const retry = screen.getByText("Try again");
    fireEvent.press(retry);
    expect(onRefresh).toHaveBeenCalled();
  });

  it("renders list items when data is present", () => {
    render(<AnimeList data={sampleData} isLoading={false} />);
    expect(screen.getByText(sampleData[0].title)).toBeTruthy();
  });

  it("renders footer loader when isLoadingMore", () => {
    render(
      <AnimeList data={sampleData} isLoading={false} isLoadingMore={true} />
    );
    expect(screen.getByTestId("loading")).toBeTruthy();
  });
});
