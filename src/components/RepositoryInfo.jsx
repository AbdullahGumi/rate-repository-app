import React from 'react';
import { View, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import Text from '../components/Text'

import CountItem from './CountItem';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius:5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius:5,
  },
  languageText: {
    color: 'white',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    flex: 0.8,
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  fullname: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
  signinBtn: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signinBtnText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});


const RepositoryInfo = ({ repository }) => {

    const onSubmit = () => {
      Linking.openURL(`https://github.com/${repository.fullName}`);
    }
  
    return (
      <View style={styles.container}>
        {repository &&
          <View>
              <View style={styles.flexContainerA}>
                  <View >
                  <Image
                      style={styles.tinyLogo}
                      source={{
                      uri: repository.ownerAvatarUrl,
                      }}
                  />
                  </View>
                  <View style={styles.flexContainerB}>
                  <View>
                      <Text testID='fullName' style={styles.fullname}>{repository.fullName}</Text>
                  </View>
                  <View>
                      <Text style={styles.description}>{repository.description}</Text>
                  </View>
                  <View style={styles.language}>
                      <Text style={styles.languageText}>{repository.language}</Text>
                  </View>
                  </View>
              </View>
              <View style={styles.flexContainerC}>
                  <CountItem name='stars' count={repository.stargazersCount} />
                  <CountItem name='forks' count={repository.forksCount} />
                  <CountItem name='rating' count={repository.ratingAverage} />
                  <CountItem name='review' count={repository.reviewCount} />
              </View>
              <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
                  <View style={styles.signinBtn}>
                  <Text testID='submitButton' style={styles.signinBtnText} fontWeight='bold'>
                      Open in GitHub
                  </Text>
                  </View>
              </TouchableOpacity>            
          </View>
        }
      </View>
    );
};
  
export default RepositoryInfo;