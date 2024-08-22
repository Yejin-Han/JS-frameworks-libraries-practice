import { AdvancedStatisticsContainer, Title, Text, StatisticsList, StatisticsItem, DetailImg, DetailTitle, DetailText } from '../assets/styles/AdvancedStatisticsStyles';

import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg';
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg';
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg';

const AdvancedStatistics = () => {
  return (
    <AdvancedStatisticsContainer>
      <Title>Advanced Statistics</Title>
      <Text>
        Track how your links are performing across the web with <span className="br-769"></span>
        our advanced statistics dashboard.
      </Text>
      <StatisticsList>
        <StatisticsItem>
          <DetailImg $bgBR={iconBrandRecognition} />
          <DetailTitle>Brand Recognition</DetailTitle>
          <DetailText>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</DetailText>
        </StatisticsItem>
        <StatisticsItem>
          <DetailImg $bgDR={iconDetailedRecords} />
          <DetailTitle>Detailed Records</DetailTitle>
          <DetailText>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</DetailText>
        </StatisticsItem>
        <StatisticsItem>
          <DetailImg $bgFC={iconFullyCustomizable} />
          <DetailTitle>Fully Customizable</DetailTitle>
          <DetailText>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</DetailText>
        </StatisticsItem>
      </StatisticsList>
    </AdvancedStatisticsContainer>
  );
}

export default AdvancedStatistics;