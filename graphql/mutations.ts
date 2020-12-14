/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const signupForEvent = /* GraphQL */ `
  mutation SignupForEvent(
    $userEventID: ID!
    $eventID: ID!
    $playerID: ID!
    $endDate: AWSDateTime!
    $createdAt: String!
    $pairingIds: [ID]
  ) {
    signupForEvent(
      userEventID: $userEventID
      eventID: $eventID
      playerID: $playerID
      endDate: $endDate
      createdAt: $createdAt
      pairingIds: $pairingIds
    ) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const withdrawFromEvent = /* GraphQL */ `
  mutation WithdrawFromEvent(
    $userEventID: ID!
    $eventID: ID!
    $endDate: AWSDateTime!
    $createdAt: String!
  ) {
    withdrawFromEvent(
      userEventID: $userEventID
      eventID: $eventID
      endDate: $endDate
      createdAt: $createdAt
    ) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const switchPairing = /* GraphQL */ `
  mutation SwitchPairing(
    $oldPairingID: ID!
    $newPairingID: ID!
    $playerPairingID: ID!
    $eventID: ID!
  ) {
    switchPairing(
      oldPairingID: $oldPairingID
      newPairingID: $newPairingID
      playerPairingID: $playerPairingID
      eventID: $eventID
    ) {
      id
      createdAt
      updatedAt
      playerID
      pairingID
      eventID
      roundID
      player {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      pairing {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
      phone
      description
      avatar {
        key
        bucket
        region
      }
      cover {
        key
        bucket
        region
      }
      primaryColor
      groups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      adminGroups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      groupInvitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      potentialEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistedEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      notifications {
        items {
          id
          userID
          createdAt
          updatedAt
          description
          type
          webLink
          mobileLink
          status
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
      phone
      description
      avatar {
        key
        bucket
        region
      }
      cover {
        key
        bucket
        region
      }
      primaryColor
      groups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      adminGroups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      groupInvitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      potentialEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistedEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      notifications {
        items {
          id
          userID
          createdAt
          updatedAt
          description
          type
          webLink
          mobileLink
          status
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
      phone
      description
      avatar {
        key
        bucket
        region
      }
      cover {
        key
        bucket
        region
      }
      primaryColor
      groups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      adminGroups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      groupInvitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      potentialEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistedEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      notifications {
        items {
          id
          userID
          createdAt
          updatedAt
          description
          type
          webLink
          mobileLink
          status
        }
        nextToken
      }
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      description
      numMembers
      numAdmins
      cover {
        key
        bucket
        region
      }
      primaryColor
      members {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      admins {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      invitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      description
      numMembers
      numAdmins
      cover {
        key
        bucket
        region
      }
      primaryColor
      members {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      admins {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      invitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      description
      numMembers
      numAdmins
      cover {
        key
        bucket
        region
      }
      primaryColor
      members {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      admins {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      invitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      role
      visits
      createdAt
      updatedAt
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      role
      visits
      createdAt
      updatedAt
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      role
      visits
      createdAt
      updatedAt
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createError = /* GraphQL */ `
  mutation CreateError(
    $input: CreateErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    createError(input: $input, condition: $condition) {
      id
      message
      fileName
      lineNumber
      frontend
      createdAt
      updatedAt
    }
  }
`;
export const updateError = /* GraphQL */ `
  mutation UpdateError(
    $input: UpdateErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    updateError(input: $input, condition: $condition) {
      id
      message
      fileName
      lineNumber
      frontend
      createdAt
      updatedAt
    }
  }
`;
export const deleteError = /* GraphQL */ `
  mutation DeleteError(
    $input: DeleteErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    deleteError(input: $input, condition: $condition) {
      id
      message
      fileName
      lineNumber
      frontend
      createdAt
      updatedAt
    }
  }
`;
export const createGroupInvitation = /* GraphQL */ `
  mutation CreateGroupInvitation(
    $input: CreateGroupInvitationInput!
    $condition: ModelGroupInvitationConditionInput
  ) {
    createGroupInvitation(input: $input, condition: $condition) {
      id
      inviteeID
      inviterID
      groupID
      message
      createdAt
      updatedAt
      status
      invitee {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      inviter {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateGroupInvitation = /* GraphQL */ `
  mutation UpdateGroupInvitation(
    $input: UpdateGroupInvitationInput!
    $condition: ModelGroupInvitationConditionInput
  ) {
    updateGroupInvitation(input: $input, condition: $condition) {
      id
      inviteeID
      inviterID
      groupID
      message
      createdAt
      updatedAt
      status
      invitee {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      inviter {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteGroupInvitation = /* GraphQL */ `
  mutation DeleteGroupInvitation(
    $input: DeleteGroupInvitationInput!
    $condition: ModelGroupInvitationConditionInput
  ) {
    deleteGroupInvitation(input: $input, condition: $condition) {
      id
      inviteeID
      inviterID
      groupID
      message
      createdAt
      updatedAt
      status
      invitee {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      inviter {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      groupID
      startDate
      endDate
      regStart
      regEnd
      capacity
      description
      cover {
        key
        bucket
        region
      }
      maxPlayersPerPairing
      numPlayers
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
      players {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistPlayers {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      rounds {
        items {
          id
          createdAt
          updatedAt
          date
          eventID
          pairingType
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          pairings {
            items {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      groupID
      startDate
      endDate
      regStart
      regEnd
      capacity
      description
      cover {
        key
        bucket
        region
      }
      maxPlayersPerPairing
      numPlayers
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
      players {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistPlayers {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      rounds {
        items {
          id
          createdAt
          updatedAt
          date
          eventID
          pairingType
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          pairings {
            items {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      groupID
      startDate
      endDate
      regStart
      regEnd
      capacity
      description
      cover {
        key
        bucket
        region
      }
      maxPlayersPerPairing
      numPlayers
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
      players {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistPlayers {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      rounds {
        items {
          id
          createdAt
          updatedAt
          date
          eventID
          pairingType
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          pairings {
            items {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createUserEvent = /* GraphQL */ `
  mutation CreateUserEvent(
    $input: CreateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    createUserEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateUserEvent = /* GraphQL */ `
  mutation UpdateUserEvent(
    $input: UpdateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    updateUserEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteUserEvent = /* GraphQL */ `
  mutation DeleteUserEvent(
    $input: DeleteUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    deleteUserEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      date
      eventID
      pairingType
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
      pairings {
        items {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      date
      eventID
      pairingType
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
      pairings {
        items {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      date
      eventID
      pairingType
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
      pairings {
        items {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createPairing = /* GraphQL */ `
  mutation CreatePairing(
    $input: CreatePairingInput!
    $condition: ModelPairingConditionInput
  ) {
    createPairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      teeTime
      roundID
      numPlayers
      players {
        items {
          id
          createdAt
          updatedAt
          playerID
          pairingID
          eventID
          roundID
          player {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          pairing {
            id
            createdAt
            updatedAt
            teeTime
            roundID
            numPlayers
            players {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const updatePairing = /* GraphQL */ `
  mutation UpdatePairing(
    $input: UpdatePairingInput!
    $condition: ModelPairingConditionInput
  ) {
    updatePairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      teeTime
      roundID
      numPlayers
      players {
        items {
          id
          createdAt
          updatedAt
          playerID
          pairingID
          eventID
          roundID
          player {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          pairing {
            id
            createdAt
            updatedAt
            teeTime
            roundID
            numPlayers
            players {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const deletePairing = /* GraphQL */ `
  mutation DeletePairing(
    $input: DeletePairingInput!
    $condition: ModelPairingConditionInput
  ) {
    deletePairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      teeTime
      roundID
      numPlayers
      players {
        items {
          id
          createdAt
          updatedAt
          playerID
          pairingID
          eventID
          roundID
          player {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          pairing {
            id
            createdAt
            updatedAt
            teeTime
            roundID
            numPlayers
            players {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createPlayerPairing = /* GraphQL */ `
  mutation CreatePlayerPairing(
    $input: CreatePlayerPairingInput!
    $condition: ModelPlayerPairingConditionInput
  ) {
    createPlayerPairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      playerID
      pairingID
      eventID
      roundID
      player {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      pairing {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updatePlayerPairing = /* GraphQL */ `
  mutation UpdatePlayerPairing(
    $input: UpdatePlayerPairingInput!
    $condition: ModelPlayerPairingConditionInput
  ) {
    updatePlayerPairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      playerID
      pairingID
      eventID
      roundID
      player {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      pairing {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deletePlayerPairing = /* GraphQL */ `
  mutation DeletePlayerPairing(
    $input: DeletePlayerPairingInput!
    $condition: ModelPlayerPairingConditionInput
  ) {
    deletePlayerPairing(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      playerID
      pairingID
      eventID
      roundID
      player {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      pairing {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      description
      type
      webLink
      mobileLink
      status
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      description
      type
      webLink
      mobileLink
      status
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
      description
      type
      webLink
      mobileLink
      status
    }
  }
`;
