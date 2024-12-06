import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import UserListScreen from '../src/screens/UserListScreen';
import {useListCustomers} from '../src/hooks/useListCustomers';

jest.mock('../src/hooks/useListCustomers');

// Mock data
const mockData = {
  items: [
    {id: '1', name: 'Admin User', role: 'ADMIN'},
    {id: '2', name: 'Manager User', role: 'MANAGER'},
  ],
};

// Mock implementation of `useListCustomers`
(useListCustomers as jest.Mock).mockImplementation((filter) => {
  const filteredData = mockData.items.filter(
    (item) =>
      (!filter.role?.eq || item.role === filter.role.eq) &&
      (!filter.name?.contains ||
        item.name.toLowerCase().includes(filter.name.contains.toLowerCase()))
  );
  return {
    data: {items: filteredData},
    loading: false,
    error: null,
    loadMore: jest.fn(),
    refetch: jest.fn(),
  };
});

describe('UserListScreen', () => {
  it('renders the component', () => {
    const {getByPlaceholderText, getByText} = render(<UserListScreen />);

    // Check for basic elements
    expect(getByPlaceholderText('Search by name')).toBeTruthy();
    expect(getByText('User Types')).toBeTruthy();
    expect(getByText('All Users')).toBeTruthy();
  });

  it('filters by role using radio buttons', async () => {
    const {getByText, queryByText} = render(<UserListScreen />);

    // Initially, all users are displayed
    expect(getByText('Admin User')).toBeTruthy();
    expect(getByText('Manager User')).toBeTruthy();

    // Select "Admin" filter
    fireEvent.press(getByText('Admin'));

    // Wait for the filtered list to be displayed
    await waitFor(() => {
      expect(getByText('Admin User')).toBeTruthy();
      expect(queryByText('Manager User')).toBeNull();
    });

    // Select "Manager" filter
    fireEvent.press(getByText('Manager'));

    await waitFor(() => {
      expect(getByText('Manager User')).toBeTruthy();
      expect(queryByText('Admin User')).toBeNull();
    });
  });

  it('filters users by search term', async () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <UserListScreen />
    );

    // Search for "Admin"
    const searchInput = getByPlaceholderText('Search by name');
    fireEvent.changeText(searchInput, 'Admin');

    await waitFor(() => {
      expect(getByText('Admin User')).toBeTruthy();
      expect(queryByText('Manager User')).toBeNull();
    });

    // Clear search term
    fireEvent.changeText(searchInput, '');

    await waitFor(() => {
      expect(getByText('Admin User')).toBeTruthy();
      expect(getByText('Manager User')).toBeTruthy();
    });
  });

  it('handles errors gracefully', () => {
    // Mock an error scenario
    (useListCustomers as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: false,
      error: {message: 'Something went wrong'},
      loadMore: jest.fn(),
      refetch: jest.fn(),
    });

    const {getByText} = render(<UserListScreen />);

    // Check for the error message
    expect(getByText('Error: Something went wrong')).toBeTruthy();
  });
});
