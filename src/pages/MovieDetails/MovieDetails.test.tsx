import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./index";
import "@testing-library/jest-dom";
import { mockMovie, mockCharacters, mockUseGetCurrentMovie, mockUseGetAllCharacters } from './testUtils'

vi.mock("react-router-dom", () => ({ useParams: () => ({ id: "1" }) }));
vi.mock("../../hooks/useGetCurrentMovie", () => ({
  useGetCurrentMovie: () => mockUseGetCurrentMovie(),
}));
vi.mock("../../hooks/useGetAllCharacters", () => ({
  useGetAllCharacters: () => mockUseGetAllCharacters(),
}));
vi.mock("../../components/LoadingSkeleton", () => ({
  default: () => <div>Loading...</div>,
}));
vi.mock("../../components/CharacterList", () => ({
  default: () => <div>Character List Component</div>,
}));

test("renders movie details and character list", () => {
  mockUseGetCurrentMovie.mockReturnValue({
    currentMovie: mockMovie,
    movieLoading: false,
    movieError: null,
    getCurrentMovie: vi.fn(),
  });

  mockUseGetAllCharacters.mockReturnValue({
    characters: mockCharacters,
    charLoading: false,
    charError: null,
    getCharacters: vi.fn(),
  });

  render(<MovieDetails />);

  expect(screen.getByText("A New Hope")).toBeInTheDocument();
  expect(screen.getByText(/Episode ID:/)).toBeInTheDocument();
  expect(screen.getByText("4")).toBeInTheDocument();
  expect(screen.getByText(/Director:/)).toBeInTheDocument();
  expect(screen.getByText("George Lucas")).toBeInTheDocument();

  expect(screen.getByText("Character List Component")).toBeInTheDocument();

});

test("shows error when movie error occurs", () => {
  mockUseGetCurrentMovie.mockReturnValue({
    currentMovie: null,
    movieLoading: false,
    movieError: "Failed to fetch movie",
    getCurrentMovie: vi.fn(),
  });

  mockUseGetAllCharacters.mockReturnValue({
    characters: [],
    charLoading: false,
    charError: null,
    getCharacters: vi.fn(),
  });

  render(<MovieDetails />);

  expect(screen.getByText("Failed to fetch movie")).toBeInTheDocument();
});

test("shows error when character error occurs", () => {
  mockUseGetCurrentMovie.mockReturnValue({
    currentMovie: null,
    movieLoading: false,
    movieError: false,
    getCurrentMovie: vi.fn(),
  });

  mockUseGetAllCharacters.mockReturnValue({
    characters: [],
    charLoading: false,
    charError: "Failed to fetch characters",
    getCharacters: vi.fn(),
  });

  render(<MovieDetails />);

  expect(screen.getByText("Failed to fetch characters")).toBeInTheDocument();
});

test("show movie loading state", () => {
  mockUseGetCurrentMovie.mockReturnValue({
    currentMovie: null,
    movieLoading: true,
    movieError: null,
    getCurrentMovie: vi.fn(),
  });

  mockUseGetAllCharacters.mockReturnValue({
    characters: [],
    charLoading: false,
    charError: null,
    getCharacters: vi.fn(),
  });

  render(<MovieDetails />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("show characterers loading state", () => {
  mockUseGetCurrentMovie.mockReturnValue({
    currentMovie: null,
    movieLoading: false,
    movieError: null,
    getCurrentMovie: vi.fn(),
  });

  mockUseGetAllCharacters.mockReturnValue({
    characters: [],
    charLoading: true,
    charError: null,
    getCharacters: vi.fn(),
  });

  render(<MovieDetails />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});



